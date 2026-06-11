# Elemental Episodes — Supreme Basics

Magazin online premium de polo-uri. Next.js 16 (App Router) · TypeScript · Tailwind v4 ·
Framer Motion · Stripe. Temă dark-argintiu, conținut în română, prețuri în lei (RON).

## Dezvoltare locală

```bash
npm install
npm run dev      # http://localhost:3000 (sau portul configurat)
npm run build    # build de producție
npm run lint     # ESLint
```

## Variabile de mediu

Copiază `.env.example` în `.env.local` și completează:

| Variabilă | Rol | Exemplu |
|---|---|---|
| `STRIPE_SECRET_KEY` | Plăți Stripe (server) | `sk_test_…` |
| `STRIPE_WEBHOOK_SECRET` | Verificare webhook Stripe | `whsec_…` |
| `NEXT_PUBLIC_SITE_URL` | URL public (SEO, OG, sitemap) | `https://mihaiflorea.dev` |

Fără cheile Stripe site-ul funcționează integral; doar butonul de plată afișează un mesaj.

## Deploy pe Vercel

1. Urcă repo-ul pe GitHub.
2. În Vercel → **Add New → Project** → importă repo-ul (framework detectat automat: Next.js).
3. La **Environment Variables**, adaugă cele de mai sus.
4. **Deploy**.
5. **Settings → Domains** → adaugă `mihaiflorea.dev` și urmează instrucțiunile DNS.

## Structură

- `app/` — rute (homepage, `/colectie`, `/produs/[slug]`, pagini de conținut, API Stripe)
- `components/` — UI, layout, shop, motion (animații), brand (logo)
- `lib/` — `catalog.ts` (produse), `benefits.ts`, `cart/`, `stripe.ts`
- `public/` — fotografie de produs optimizată (WebP)
- `scripts/process-assets.mjs` — pipeline one-time de optimizare imagini din `../_assets_raw`

## De completat pentru producție

- Prețuri reale pentru pachete (acum estimative)
- Date firmă în paginile legale (`app/termeni`, etc.)
- E-mail de contact real (acum `contact@elementalepisodes.com`)
- Trimitere e-mail confirmare comandă în webhook (`app/api/webhook/route.ts`)
