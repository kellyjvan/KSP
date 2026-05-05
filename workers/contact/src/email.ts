import { EmailPayload } from './types';

export async function sendEmail(
  payload: EmailPayload,
  fromEmail: string,
  apiKey: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: payload.to,
        subject: payload.subject,
        html: payload.html,
        reply_to: payload.replyTo,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      return { success: false, error: `Resend API error (${response.status}): ${body}` };
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: `Failed to send email: ${err}` };
  }
}
