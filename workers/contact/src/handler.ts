import { Env, ContactFormBody } from './types';
import { sendEmail } from './email';

export async function handleContactForm(request: Request, env: Env): Promise<Response> {
  // Parse body
  let body: ContactFormBody;
  try {
    body = await request.json() as ContactFormBody;
  } catch {
    return jsonResponse({ success: false, error: 'Invalid JSON body' }, 400);
  }

  // Honeypot check — return 200 silently to not tip off bots
  if (body.website) {
    return jsonResponse({ success: true }, 200);
  }

  // Validate required fields
  const errors: string[] = [];
  if (!body.name?.trim()) errors.push('Name is required');
  if (!body.email?.trim()) errors.push('Email is required');
  if (!body.message?.trim()) errors.push('Message is required');

  if (errors.length > 0) {
    return jsonResponse({ success: false, errors }, 400);
  }

  // Rate limiting — max 3 submissions per IP per hour
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const rateKey = `ip:${ip}`;
  const rateData = await env.CONTACT_KV.get(rateKey);
  const count = rateData ? parseInt(rateData, 10) : 0;

  if (count >= 3) {
    return jsonResponse(
      { success: false, error: 'Too many submissions. Please try again later.' },
      429
    );
  }

  // Increment rate limit counter (1 hour TTL)
  await env.CONTACT_KV.put(rateKey, String(count + 1), { expirationTtl: 3600 });

  // Build email
  const recipients = env.RECIPIENTS.split(',').map((e) => e.trim());
  const subject = 'New Contact Form Submission — Klamath Sportsman\'s Park';
  const html = buildEmailHtml(body);

  // Send email
  const result = await sendEmail(
    { to: recipients, subject, html, replyTo: body.email.trim() },
    env.FROM_EMAIL,
    env.RESEND_API_KEY
  );

  if (!result.success) {
    console.error('Email send failed:', result.error);
    return jsonResponse(
      { success: false, error: 'Failed to send message. Please try again later.' },
      500
    );
  }

  // Increment daily submission counter for heartbeat reporting
  const dailyKey = 'stats:daily_count';
  const dailyCount = await env.CONTACT_KV.get(dailyKey);
  const newCount = (dailyCount ? parseInt(dailyCount, 10) : 0) + 1;
  await env.CONTACT_KV.put(dailyKey, String(newCount), { expirationTtl: 86400 });

  return jsonResponse({ success: true }, 200);
}

function buildEmailHtml(body: ContactFormBody): string {
  const phone = body.phone?.trim()
    ? `<p><strong>Phone:</strong> ${escapeHtml(body.phone.trim())}</p>`
    : '';

  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2f3e2f; border-bottom: 2px solid #3d5a40; padding-bottom: 8px;">
        New Contact Form Submission
      </h2>
      <p><strong>Name:</strong> ${escapeHtml(body.name.trim())}</p>
      <p><strong>Email:</strong> ${escapeHtml(body.email.trim())}</p>
      ${phone}
      <h3 style="color: #3d5a40; margin-top: 24px;">Message:</h3>
      <p style="white-space: pre-wrap; background: #f4f6f2; padding: 16px; border-radius: 8px;">
        ${escapeHtml(body.message.trim())}
      </p>
      <hr style="margin-top: 32px; border: none; border-top: 1px solid #ddd;" />
      <p style="font-size: 12px; color: #888;">
        Sent from the contact form at klamathsportsmanspark.com
      </p>
    </div>
  `;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function jsonResponse(data: object, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
