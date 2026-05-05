# Klamath Sportsman's Park Website

[![Deploy Site](https://github.com/kellyjvan/KSP/actions/workflows/deploy-site.yml/badge.svg?branch=main)](https://github.com/kellyjvan/KSP/actions/workflows/deploy-site.yml)
[![Deploy Worker](https://github.com/kellyjvan/KSP/actions/workflows/deploy-worker.yml/badge.svg?branch=main)](https://github.com/kellyjvan/KSP/actions/workflows/deploy-worker.yml)

SvelteKit static site for Klamath Sportsman's Park, hosted on GitHub Pages with a Cloudflare Worker handling the contact form.

## Architecture

```
Static Site (GitHub Pages)          Cloudflare Worker
klamathsportsmanspark.com           contact.klamathsportsmanspark.com
├── HTML/CSS/JS (pre-rendered)      ├── Contact form handler
├── Optimized WebP images           ├── Honeypot spam protection
└── YouTube embeds                  ├── Rate limiting (KV)
                                    ├── Resend email API
                                    └── Daily health check (cron)
```

## Prerequisites

- Node.js 18+
- npm
- A Cloudflare account (for Workers, DNS)
- A Resend account (for transactional email)

---

## Local Development

### Static Site (SvelteKit)

```bash
# From the project root
npm install
npm run dev
```

Site runs at `http://localhost:5173`

### Contact Form Worker

```bash
cd workers/contact
npm install
npm run dev
```

Worker runs at `http://127.0.0.1:8787`

Note: For local Worker development, secrets are loaded from `workers/contact/.dev.vars` (gitignored):

```
RESEND_API_KEY=your_key_here
```

---

## Image Processing

All site images are optimized from raw source photos using a custom script.

### How It Works

1. Place raw images (JPG, PNG, etc.) in a subfolder of `raw-photos/`
2. The folder name becomes the output filename prefix
3. Run the script — outputs go to `static/images/<folder>/`

### Example

```
raw-photos/camping/DJI_0016.JPG  →  static/images/camping/camping_1.webp
raw-photos/camping/DJI_0021.JPG  →  static/images/camping/camping_2.webp
raw-photos/rc/rc_1.png           →  static/images/rc/rc_1.webp
```

### Running the Script

```bash
node scripts/optimize-images.js
```

### Configuration (in `scripts/optimize-images.js`)

| Setting | Default | Description |
|---------|---------|-------------|
| `MAX_WIDTH` | 1400px | Images wider than this are downscaled |
| `QUALITY` | 13 | Default WebP quality (1-100) |
| `QUALITY_OVERRIDES` | `{ rc: 100, camping: 60 }` | Per-folder quality overrides |

### Re-processing Images

The script skips existing files. To re-process (e.g., after changing quality):

```powershell
Remove-Item "static\images\camping\*.webp" -Force
node scripts/optimize-images.js
```

### Adding New Photos

1. Create folder: `raw-photos/<name>/`
2. Add images to the folder
3. (Optional) Add quality override in `scripts/optimize-images.js`
4. Run: `node scripts/optimize-images.js`
5. Wire up in the page component:
   ```js
   const images = [
     { src: '/images/<name>/<name>_1.webp', alt: 'Description' },
     { src: '/images/<name>/<name>_2.webp', alt: 'Description' },
   ];
   ```

---

## Cloudflare Worker (Contact Form)

Located in `workers/contact/`. Handles contact form submissions and sends emails via Resend.

### What It Does

- **`POST /`** — Receives form submissions, validates, rate limits, sends email to recipients
- **`OPTIONS /`** — CORS preflight
- **`GET /health`** — Sends a test email to verify the pipeline works
- **Cron (daily 9 AM Pacific)** — Sends a health check email with submission stats

### Environment Variables (in `wrangler.toml`)

| Variable | Value |
|----------|-------|
| `RECIPIENTS` | Comma-separated list of org email addresses |
| `ALERT_EMAIL` | Your personal email for the daily heartbeat |
| `FROM_EMAIL` | Sending address, e.g., `noreply@klamathsportsmanspark.com` |
| `ALLOWED_ORIGIN` | `https://klamathsportsmanspark.com` |

### Secrets (stored in Cloudflare, NOT in code)

| Secret | Description |
|--------|-------------|
| `RESEND_API_KEY` | Resend API key for sending email |

### Deploying the Worker

```bash
cd workers/contact
npx wrangler login              # one-time auth
npx wrangler deploy             # deploy to Cloudflare
```

### Setting Secrets

```bash
npx wrangler secret put RESEND_API_KEY
# paste your key when prompted
```

### Creating the KV Namespace (first time only)

```bash
npx wrangler kv namespace create "CONTACT_KV"
# Copy the id into wrangler.toml
```

### Custom Domain Setup

1. In Cloudflare dashboard: **Workers & Pages** → `ksp-contact` → **Settings** → **Domains & Routes**
2. Add Custom Domain: `contact.klamathsportsmanspark.com`
3. Cloudflare creates the DNS record automatically

### Testing

- Health check: visit `https://contact.klamathsportsmanspark.com/health`
- Form submission: submit the contact form on the site

---

## Resend Email Setup

Resend is used for transactional email delivery (contact form + heartbeat).

### Setup Steps

1. Sign up at [resend.com](https://resend.com)
2. Go to **Domains** → **Add Domain** → enter `klamathsportsmanspark.com`
3. Add the DNS verification records in Cloudflare (or use Resend's auto-configure option)
4. Once verified, create an API key with **Sending access** only
5. Store the key as a Worker secret (see above)

### Limits

- Free tier: 3,000 emails/month, 100 emails/day
- Contact form + daily heartbeat uses ~30-60 emails/month

---

## Spam Protection

The contact form uses layered protection:

1. **Honeypot field** — A hidden `website` input that real users never see. Bots fill it in and get silently rejected (200 response to not tip them off).
2. **CORS origin check** — Only requests from `klamathsportsmanspark.com` (and `localhost:5173` for dev) are accepted.
3. **Rate limiting** — Max 3 submissions per IP per hour, enforced via Cloudflare KV with auto-expiring keys.

If spam becomes a problem, the next step would be adding [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) (free CAPTCHA alternative, invisible to users).

---

## Project Structure

```
KSP/
├── src/
│   ├── routes/              # SvelteKit pages
│   │   ├── +page.svelte     # Home
│   │   ├── about/
│   │   ├── airfield/
│   │   ├── archery/
│   │   ├── camping/
│   │   ├── contact/
│   │   ├── dayuse/
│   │   ├── membership/
│   │   ├── offroad/
│   │   ├── ranges/
│   │   ├── sportingclays/
│   │   └── termsofservice/
│   ├── Header.svelte        # Shared nav (desktop + mobile)
│   ├── Footer.svelte        # Shared footer
│   ├── ImageViewer.svelte   # Photo viewer with modal
│   └── app.css              # Global styles (currently empty)
├── static/
│   └── images/              # Optimized WebP images
├── raw-photos/              # Source images (not deployed)
├── scripts/
│   └── optimize-images.js   # Image optimization script
├── workers/
│   └── contact/             # Cloudflare Worker
│       ├── src/
│       │   ├── index.ts     # Router + CORS
│       │   ├── handler.ts   # Form submission logic
│       │   ├── heartbeat.ts # Daily cron health check
│       │   ├── email.ts     # Resend API wrapper
│       │   └── types.ts     # TypeScript interfaces
│       ├── wrangler.toml    # Worker config
│       ├── package.json
│       └── tsconfig.json
├── package.json             # SvelteKit app config
└── vite.config.js           # Vite config
```

---

## Branching & Deployment

```
dev (default branch) ── work here, push freely
 │
 └──► merge/PR into main ── triggers GitHub Actions deploy
```

- **`dev`** — Default branch for day-to-day development. Pushes here do NOT trigger deploys.
- **`main`** — Production branch. Pushes here trigger GitHub Actions workflows.

### Deploying to Production

```bash
# From dev branch, when ready to release:
git checkout main
git merge dev
git push origin main        # triggers deploy
git checkout dev            # switch back to working branch
```

Or create a Pull Request from `dev` → `main` on GitHub.

### What Gets Deployed

Two separate GitHub Actions workflows run on push to `main`, each with path-based triggers:

| Workflow | Trigger Paths | What It Does |
|----------|--------------|--------------|
| `deploy-site.yml` | Everything except `workers/`, `raw-photos/`, `README.md` | Builds SvelteKit and deploys to GitHub Pages |
| `deploy-worker.yml` | `workers/contact/**` only | Deploys Cloudflare Worker via Wrangler |

### Domains

| Domain | Points To |
|--------|-----------|
| `klamathsportsmanspark.com` | GitHub Pages (A records) |
| `www.klamathsportsmanspark.com` | GitHub Pages (CNAME) |
| `klamathsportsmenspark.com` | 301 redirect → `klamathsportsmanspark.com` |
| `www.klamathsportsmenspark.com` | 301 redirect → `klamathsportsmanspark.com` |
| `contact.klamathsportsmanspark.com` | Cloudflare Worker |

---

## Key Details

- **Domain:** `klamathsportsmanspark.com` (managed in Cloudflare)
- **Worker URL:** `contact.klamathsportsmanspark.com`
- **Sending email:** `noreply@klamathsportsmanspark.com`
- **Recipients:** Stored as Cloudflare Worker secrets
- **Daily heartbeat:** 9 AM Pacific to alert email (stored as secret)
- **YouTube videos:** Airfield, Pistol, 200m, 600yd ranges, Camping (x2)
- **Stripe buy button:** `buy_btn_1NCCGqS9ZzXHNdtHCP1jJQba` (membership page)
