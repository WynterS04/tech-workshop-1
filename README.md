# KTP Tech Workshop #1 – React + Next.js

## Overview

This workshop introduces **Next.js**, a React-based framework that extends React with production-ready features. Attendees learn how to set up a Next.js project, style it with Tailwind CSS, build reusable components, navigate between routes, and deploy to GitHub Pages.

## Slides

The slides that were used during the workshop can be found [here](Tech%20workshop%201.pdf).

## URL

The live URL of the web app that this repository creates can be found [here](https://ktp-usc.github.io/tech-workshop-1/).

---

## Prerequisites

* GitHub account
* IntelliJ WebStorm (or VS Code)
* Node.js

---

## KTP Tech Stack

| Tool             | Purpose                                             |
| ---------------- | --------------------------------------------------- |
| **Next.js**      | Core framework                                      |
| **TypeScript**   | Safer coding practices with strict typing           |
| **Tailwind CSS** | Utility-first styling system                        |
| **Zustand**      | Easy and minimal global state management            |
| **React Query**  | Server state management and optimized data fetching |
| **GitHub Pages** | Easy and free deployment                            |
| **Figma**        | Design, wireframing, prototyping                    |

---

## Why Next.js?

* Created in 2016, maintained by **Vercel** + open source community
* Benefits over plain React:

  * File-based routing
  * React Server Components by default → faster loads, smaller bundles
  * Built-in optimization (images, fonts, streaming, prefetching)
  * Developer-friendly setup (TypeScript, ESLint, Tailwind, Turbopack included)

---

## Setup

### Using WebStorm

* Linter: Yes
* Tailwind CSS: Yes
* src/ directory: No
* App Router: Yes
* Turbopack: Yes
* Customize import: No

### Using VS Code

```bash
npx create-next-app
```

* Project name: `.` (current directory)
* TypeScript: Yes
* Linter: Yes
* Tailwind CSS: Yes
* src/ directory: No
* App Router: Yes
* Turbopack: Yes
* Customize import: No

---

## Project Structure

* `/app` → all routes live here
* `layout.tsx` → shared layout
* `page.tsx` → page content
* `globals.css` → global styles
* `/public` → static assets

---

## Tailwind CSS

* Utility-first CSS framework
* Styling via classes (no jumping between multiple CSS files)
* Responsive modifiers: `sm:`, `md:`, `lg:`
* State modifiers: `hover:`, `focus:`, `required:`

---

## React Components

Reusable building blocks of UI:

```tsx
function Greeting({ name }: { name: string }) {
  return <p>Hello {name}</p>
}
```

---

## React Props

Pass data from parent to child:

```tsx
import Greeting from '@/components/Greeting'

export default function Home() {
  return (
    <section className="space-y-3 p-6">
      <h1 className="text-3xl font-bold">Home</h1>
      <Greeting name="KTP" />
    </section>
  )
}
```

---

## Navigation

* File-based routing (`/app/page.tsx → /`)
* Use `<Link>` for navigation
* Navigation component typically lives in `layout.tsx`
* Dynamic routes supported with `[slug]`

---

## Deploying to GitHub

1. Edit `next.config.js` (set base path if deploying to repo pages)
2. Create GitHub Actions workflow
3. Go to Settings → Actions → General → enable Read/Write
4. Go to Settings → Pages → Build and deployment → set source to GitHub Actions

---

## Troubleshooting

If deployment fails with an error about `generateStaticParams()`:

* Next.js needs to pre-generate dynamic routes for static export
* Client-side-only pages cannot be fully exported without params
* To fix, see the multiline comment in [app/project/[projectId]/page.tsx](app/project/[projectId]/page.tsx)
