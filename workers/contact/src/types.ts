export interface Env {
  CONTACT_KV: KVNamespace;
  RESEND_API_KEY: string;
  RECIPIENTS: string;
  ALERT_EMAIL: string;
  FROM_EMAIL: string;
  ALLOWED_ORIGIN: string;
}

export interface ContactFormBody {
  name: string;
  email: string;
  phone?: string;
  message: string;
  website?: string; // honeypot field
}

export interface EmailPayload {
  to: string[];
  subject: string;
  html: string;
  replyTo?: string;
}
