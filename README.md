# Mohamed Zouari — Portfolio

A modern, animated personal portfolio website for **Mohamed Zouari** — AI Engineer, Full-Stack Developer, and IEEE Leader based in Sfax, Tunisia.

**Live:** [mohamedzouari4.github.io/portfolio](https://mohamedzouari4.github.io/portfolio)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| UI Primitives | Radix UI |
| Icons | Lucide React |
| Email | EmailJS |
| Fonts | Syne · DM Sans · JetBrains Mono |

---

## Features

- **12 sections** — Hero, About, Journey, Education, Experience, Projects, Skills, IEEE, Awards, Testimonials, Uses, Contact
- **Internationalization** — English, French, and Arabic (full RTL support)
- **Animated canvas background** — Particle system with connection lines
- **Filterable projects** — Category-based filtering (AI / Full-Stack / Mobile & Games)
- **Expandable experience cards** — Accordion-style with tech stack tags
- **Contact form** — EmailJS integration with Zod validation
- **Scroll tracking** — Progress bar, active section dots, section navigation
- **Typing effect** — Animated role cycling in the hero section
- **Theme system** — Cyber & Ocean modes with localStorage persistence
- **Cursor spotlight** — Mouse-tracking radial gradient glow
- **Responsive** — Mobile-first, optimized for all screen sizes
- **Accessible** — ARIA labels, keyboard navigation, semantic HTML

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/MohamedZouari4/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173/portfolio/`

### Build

```bash
npm run build
```

Output goes to `dist/`.

### Preview production build

```bash
npm run preview
```

---

## Configuration

### EmailJS (Contact Form)

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add an Email Service (Gmail) → note the **Service ID**
3. Create an Email Template with these variables:
   - `{{name}}` — sender's name
   - `{{email}}` — sender's email (set as Reply-To)
   - `{{subject}}` — message subject
   - `{{message}}` — message body
4. Copy your **Template ID** and **Public Key** (Account → General)
5. Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

6. For GitHub Pages deployment, add the same three values as **repository secrets** at:  
   `github.com/<your-username>/portfolio/settings/secrets/actions`

### Personal Data

All content (name, projects, experience, skills, awards, IEEE roles, etc.) lives in one file:

```
src/data/index.ts
```

### Translations

Add or edit translations in `src/lib/utils.ts` inside the `translations` object (EN / FR / AR).

---

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components (Navbar, Footer, modals, etc.)
├── data/            # All site content — single source of truth
├── hooks/           # Custom React hooks (useTheme, useCounter, etc.)
├── lib/             # Utilities, context providers (LangContext)
└── sections/        # Full-page sections (Hero, About, Projects, etc.)
```

---

## Deployment

### GitHub Pages (GitHub Actions — configured)

Deployment is fully automated via `.github/workflows/deploy.yml`. Every push to `main` triggers a build and deploy.

**One-time setup:**
1. Go to `Settings → Pages` → set Source to **GitHub Actions**
2. Add these repository secrets at `Settings → Secrets → Actions`:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

> `base: '/portfolio/'` in `vite.config.ts` is already configured for GitHub Pages.  
> Change it to `'/'` if using a custom root domain (e.g. `mohamedzouari.dev`).

### Vercel / Netlify

Connect the repo — both platforms detect Vite automatically. Set the output directory to `dist`. Add the three `VITE_EMAILJS_*` environment variables in the platform dashboard.

---

## Contact

| | |
|---|---|
| Email | mohamedzouari202@gmail.com |
| LinkedIn | [linkedin.com/in/mohamedzouari202](https://www.linkedin.com/in/mohamedzouari202/) |
| GitHub | [github.com/MohamedZouari4](https://github.com/MohamedZouari4) |
| Phone | +216 55077985 |
| Location | Sfax, Tunisia |
