# Tashi Tech — Frontend

Premium marketing site for Tashi Tech, built with React 19, Vite, TypeScript, and Tailwind CSS v4.

## What's included

- **Pages**: Home, Services, About, Pricing, FAQs, Contact, 404
- **Design**: Glassmorphism sticky navbar, animated gradient hero, scroll reveals (Framer Motion), animated stat counters, tech marquee, accordion FAQ with search
- **Contact form**: React Hook Form + Zod validation, posts leads to the backend at `POST /api/contact`
- **SEO**: Per-page meta tags via `react-helmet-async`, canonical URLs, Open Graph/Twitter cards, Organization JSON-LD schema, `robots.txt`
- **Backend**: All API calls point to `https://tashi-tech-backend.onrender.com` (see `src/services/api.ts`)

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Backend integration

The contact form currently expects the backend to expose:

```
POST https://tashi-tech-backend.onrender.com/api/contact
Content-Type: application/json

{
  "name": "string",
  "company": "string?",
  "email": "string",
  "phone": "string?",
  "service": "string?",
  "budget": "string?",
  "message": "string"
}
```

If your backend uses a different route or payload shape, update `submitContactLead` in
`src/services/api.ts`.

To point the app at a different backend (e.g. local dev), change `API_BASE_URL` in the same file,
or refactor it to read from a Vite env variable (`import.meta.env.VITE_API_BASE_URL`).

## Deployment (Vercel)

1. Push this project to a GitHub repo.
2. Import the repo in Vercel.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

## Folder structure

```
src/
  components/   Navbar, Footer, Button, Seo, Reveal, Counter, WhatsAppFloat, Eyebrow
  pages/        Home, Services, About, Pricing, Faqs, Contact, NotFound
  layouts/      RootLayout (navbar + footer shell)
  services/     api.ts (axios instance + backend calls)
  utils/        data.ts (services, pricing, testimonials, FAQ content)
  assets/       logo.png
```

## Not yet built

This delivery covers the six core pages requested first. Not yet included from the full brief:
Portfolio, , Industries (standalone page), Technologies (standalone page), Blog/CMS,
Careers, Testimonials (standalone page), Privacy Policy, Terms, and the Admin Dashboard + Node/Express/
MongoDB backend. Happy to build these next — let me know which to prioritize.
