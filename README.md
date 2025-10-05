# SkillTube

SkillTube is a lightweight educational video streaming platform built with Vite + React + TypeScript and a Tailwind-based UI. It uses Supabase for authentication and data storage.

This repository contains the frontend application and Supabase migration files.

---

## Features

- Email / password authentication (Supabase)
- Role-based access (student / teacher)
- Upload videos (teacher role)
- Playlists, history, profile management
- Responsive UI built with Radix + Tailwind components

---

## Prerequisites

- Node.js (recommended 18+)
- npm (or yarn/pnpm)
- A Supabase project (for auth and database)

---

## Environment

Create a `.env` file (or set environment variables) with the following values used by the frontend:

- VITE_SUPABASE_URL — your Supabase project URL
- VITE_SUPABASE_PUBLISHABLE_KEY — your Supabase public (anon) key

Example `.env` (do NOT commit this file):

```powershell
# .env
VITE_SUPABASE_URL=https://xyzcompany.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=public-anon-key
```

Note: these variables are read by Vite and exposed to the browser (they must be prefixed with `VITE_`).

---

## Install

Install dependencies and run the dev server:

```powershell
npm install
npm run dev
```

Build for production and preview:

```powershell
npm run build
npm run preview
```

---

## Useful Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — create production build
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint

---

## Project structure (important files)

- `index.html` — HTML entry, favicon and social meta tags
- `src/main.tsx` — app bootstrap
- `src/App.tsx` — top-level routes
- `src/components` — shared components (Navbar, VideoCard, UI primitives)
- `src/pages` — pages (Home, Auth, Profile, Upload, Watch, Playlists, etc.)
- `src/contexts/AuthContext.tsx` — Supabase auth wrapper and hooks
- `src/integrations/supabase` — generated supabase client + types
- `public/` — static assets (favicon, placeholder images, video-favicon.svg)
- `supabase/migrations/` — DB migration SQL files

---

## Auth & Profile

- The authentication is implemented in `src/contexts/AuthContext.tsx` using the Supabase client.
- The `Auth` page is at `src/pages/Auth.tsx`. After a successful sign-up the app currently returns the user to the sign-in view (the UI prompts the user to sign in).
- User profile data is stored in a `profiles` table accessed via Supabase queries in `src/pages/Profile.tsx`.

---

## UI Notes

- The project uses a small set of Radix UI primitives (Dialog, DropdownMenu etc.) and a custom design system in `src/components/ui/`.
- A video-style favicon is available at `public/video-favicon.svg`. Browsers cache favicons — hard refresh if you don't see changes immediately.

---

## Troubleshooting

1. "Dev server exits with code 1" or failing to start
   - Verify your environment variables `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` are set.
   - Check terminal output for the exact error message and share it if you need help.

2. Supabase auth issues
   - Make sure your Supabase project's auth settings allow email signups.
   - If signing up triggers email verification, ensure email redirect URL and templates are configured in Supabase.

3. Favicon not updating
   - Hard refresh the browser (Ctrl+F5) or clear site data. Some browsers cache favicons aggressively.

---

## Development tips

- To add a new page, create a file under `src/pages/` and add a route in `src/App.tsx`.
- To update the Supabase schema, add migration SQL to `supabase/migrations/` and apply it in your Supabase project.

---

## Contributing

Feel free to open PRs for bug fixes and enhancements. If you want help implementing changes (for example, moving the edit-profile dialog into a reusable component), tell me what you want and I can implement it.

---

## License

(Choose and add a license if you plan to publish this project.)

---

If you'd like I can also:
- Add a CONTRIBUTING.md with contribution guidelines
- Add CI (GitHub Actions) for build and lint checks
- Create a deploy guide for Vercel / Netlify

Tell me which you'd like next.