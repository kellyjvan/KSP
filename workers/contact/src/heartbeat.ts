import { Env } from './types';
import { sendEmail } from './email';

export async function handleHeartbeat(env: Env): Promise<void> {
  // Read daily submission count
  const dailyCount = await env.CONTACT_KV.get('stats:daily_count');
  const count = dailyCount ? parseInt(dailyCount, 10) : 0;

  // Send a test email through Resend to verify the pipeline works
  const testResult = await sendEmail(
    {
      to: [env.ALERT_EMAIL],
      subject: 'KSP Contact Form — Daily Health Check ✓',
      html: buildHeartbeatHtml(count),
    },
    env.FROM_EMAIL,
    env.RESEND_API_KEY
  );

  if (!testResult.success) {
    // Not much we can do here — if email sending is broken, we can't email about it.
    // This would show up in Worker logs in the Cloudflare dashboard.
    console.error('Heartbeat email failed:', testResult.error);
  }

  // Reset daily counter
  await env.CONTACT_KV.put('stats:daily_count', '0', { expirationTtl: 86400 });
}

function buildHeartbeatHtml(submissionCount: number): string {
  const now = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });

  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2f3e2f; border-bottom: 2px solid #3d5a40; padding-bottom: 8px;">
        KSP Contact Form — Daily Report
      </h2>
      <p style="font-size: 16px;">
        The contact form worker is <strong style="color: #3d5a40;">alive and healthy</strong>.
      </p>
      <table style="border-collapse: collapse; margin: 16px 0;">
        <tr>
          <td style="padding: 8px 16px; border: 1px solid #ddd; font-weight: bold;">Submissions (last 24h)</td>
          <td style="padding: 8px 16px; border: 1px solid #ddd;">${submissionCount}</td>
        </tr>
        <tr>
          <td style="padding: 8px 16px; border: 1px solid #ddd; font-weight: bold;">Report generated</td>
          <td style="padding: 8px 16px; border: 1px solid #ddd;">${now}</td>
        </tr>
        <tr>
          <td style="padding: 8px 16px; border: 1px solid #ddd; font-weight: bold;">Email pipeline</td>
          <td style="padding: 8px 16px; border: 1px solid #ddd; color: #3d5a40;">Working</td>
        </tr>
      </table>
      <p style="font-size: 12px; color: #888;">
        If you stop receiving this daily email, the contact form worker may be down.
        Check the Cloudflare Workers dashboard for errors.
      </p>
    </div>
  `;
}
