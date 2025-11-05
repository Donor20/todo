# Todo App

Simple and fast task manager UI built with React, TypeScript, Vite, and Tailwind CSS. It showcases a sidebar, tasks list with status toggle, basic filters, completion statistics, and light/dark theme switching.

No backend is required: tasks are served from an in‑memory data source in `src/entities/task/model/api.ts`.

---

### Features

- **Tasks list**: load tasks, mark as done/todo
- **Filters UI**: tabs for All/Today/Week/Completed (visual only for now)
- **Progress**: computes and displays completed percentage
- **Categories & Activity**: placeholder visuals for insights
- **Theme toggle**: light/dark via the sidebar

---

### Tech Stack

- **React 19** + **TypeScript 5**
- **Vite 7** for dev/build
- **Tailwind CSS 4** for styling
- **Radix UI** primitives and **lucide-react** icons

---

### Prerequisites

- Node.js 18+ (recommended 18 or 20)
- npm 9+

---

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the app at `http://localhost:5173`.

---

### Available Scripts

- `npm run dev`: start Vite dev server with HMR
- `npm run build`: type-check and build for production
- `npm run preview`: preview the production build locally
- `npm run lint`: run ESLint

---

### Notes

- Filters are currently UI-only; extend `api.ts` or add state to implement real filtering.
- There is no persistence; refresh resets to the seed data.
