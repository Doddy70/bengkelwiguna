# Exsit – Software, SaaS & Startup Next.js Template

Exsit is a modern, clean, and fully responsive **Next.js template** designed for SaaS products, software companies, startups, and modern businesses.

Built using **Next.js App Router and Tailwind CSS**, Exsit provides high performance, clean code structure, and easy customization for production use.

---

## ✨ Features

- Next.js App Router
- Tailwind CSS utility-first framework
- Fully responsive layout
- Multiple homepage variations
- Reusable and modular components
- SEO-friendly structure
- Optimized production build
- Clean folder structure
- Easy customization
- Vercel & Netlify ready

---

## Requirements

- Node.js **v18 or later**
- npm / yarn

---

## Installation

```bash
npm install
# or
yarn install
```

---

## Run the Development Server

```bash
npm run dev
# or
yarn dev
```

---

## Create an Optimized Production Build

```bash
npm run build
```

---

## Start the Production Server

```bash
npm start
```

---

##  Deployment

This template can be deployed on:

- **Vercel (Recommended)**
- Netlify
- Any Node.js-compatible hosting


## ⚙️ Environment Configuration
This template requires environment variables to function correctly in production. 
1. Copy `.env.example` to `.env.local`.
2. Define `NEXT_PUBLIC_SITE_URL` with your production domain. This is used by the dynamic SEO tools in `src/app/robots.ts`.


## 🚀 Production Deployment
### Vercel / Netlify
1. Connect your repository to the hosting platform.
2. In the **Environment Variables** settings of your dashboard, add `NEXT_PUBLIC_SITE_URL`.
3. The build command is `npm run build` and the output directory is `.next`.

### Manual Deployment
Run `npm run build` to create an optimized production bundle, followed by `npm start` to launch the server.

## Project Structure

src/
├── app/          # App Router (Pages, Layouts, Error handling)
├── components/   # Reusable UI components (Hero, Pricing, etc.)
├── const/        # Static constants and configuration strings
├── data/         # Local data files (Pricing, Features, Testimonials)
├── lib/          # Utility functions and shared logic
├── styles/       # Global CSS and Tailwind v4 entry point
└── types/        # TypeScript interfaces and type definitions
public/           # Static assets (Logos, Icons, Images)

---

## Customization

- Update pages inside `src/app`
- Edit reusable components in `src/components`
- Global styles can be modified in `src/app/globals.css`
- Tailwind CSS v4 is used (no separate Tailwind config file is required by default)

---

## License

This template is licensed under the **ThemeForest Regular License**.
