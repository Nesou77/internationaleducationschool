# IES — International Education School

This repository contains the IES website, built with the Next.js App Router.

Local development:

```bash
npm install
npm run dev
```

Notes:
- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion

## Project structure

```
app/                  Routes, layout, global metadata
components/           Shared components (header, footer, etc.)
components/sections/  Page sections rendered on the homepage
components/ui/        Reusable shadcn/ui primitives
data/                 Static, reusable content (e.g. select options)
hooks/                Shared React hooks
lib/                  Framework-agnostic utilities
styles/               Global CSS
public/               Static assets served as-is (images, favicons, ...)
```
