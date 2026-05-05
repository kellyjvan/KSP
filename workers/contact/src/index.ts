import { Env } from './types';
import { handleContactForm } from './handler';
import { handleHeartbeat } from './heartbeat';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // CORS headers
    const corsHeaders: Record<string, string> = {
      'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Preflight
    if (request.method === 'OPTIONS') {
      const origin = request.headers.get('Origin');
      const allowedOrigins = [env.ALLOWED_ORIGIN, 'http://localhost:5173'];
      const responseOrigin = origin && allowedOrigins.includes(origin) ? origin : env.ALLOWED_ORIGIN;
      return new Response(null, {
        status: 204,
        headers: { ...corsHeaders, 'Access-Control-Allow-Origin': responseOrigin },
      });
    }

    // Contact form submission
    if (url.pathname === '/' && request.method === 'POST') {
      // Verify origin
      const origin = request.headers.get('Origin');
      const allowedOrigins = [env.ALLOWED_ORIGIN, 'http://localhost:5173'];
      if (!origin || !allowedOrigins.includes(origin)) {
        return new Response(JSON.stringify({ success: false, error: 'Forbidden' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      // Use the request's origin for CORS response
      const responseCorsHeaders: Record<string, string> = {
        ...corsHeaders,
        'Access-Control-Allow-Origin': origin,
      };

      const response = await handleContactForm(request, env);

      // Add CORS headers to the response
      const newHeaders = new Headers(response.headers);
      for (const [key, value] of Object.entries(responseCorsHeaders)) {
        newHeaders.set(key, value);
      }

      return new Response(response.body, {
        status: response.status,
        headers: newHeaders,
      });
    }

    // 404 for everything else
    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  },

  // Cron trigger — daily heartbeat
  async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil(handleHeartbeat(env));
  },
};
