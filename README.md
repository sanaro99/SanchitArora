# Sanchit Arora – Portfolio Website

This is the personal portfolio website of Sanchit Arora, built with Next.js, React, and TypeScript. It showcases my professional journey, skills, projects, achievements, and continuous learning through online courses.

---

## 📢 Attribution

> **Note:** This portfolio is primarily based on the open-source project [dillionverma/portfolio](https://github.com/dillionverma/portfolio). Most of the code and structure are adapted from that repository, with customizations made for my own content and preferences.

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (for animations)

## 📁 Project Structure

```
├── src/
│   ├── app/               # Main pages and routing
│   ├── components/        # UI components (cards, badges, etc.)
│   ├── data/              # Profile data (resume, projects, etc.)
│   └── ...
├── public/                # Static assets (images, icons)
├── README.md
└── ...
```

## 🖥️ Getting Started

Use Node.js 22.18 or newer. The blog regression tests use Node's built-in TypeScript support. `.nvmrc` selects Node 24 for local version managers and Netlify builds, overriding legacy hosting defaults.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sanaro99/SanchitArora.git
   cd SanchitArora
   ```
2. **Install dependencies:**
   ```bash
   npm ci
   # or
   yarn install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open in your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 📝 Customization
- Update your personal and professional information in `src/data/resume.tsx`.
- Add or update images in the `public/` directory.
- Customize components in `src/components/` for further personalization.
- See [content and asset notes](docs/portfolio-content.md) for project sources, screenshot context, and how to keep the portfolio current.

## Validation

```bash
npm test
npm run lint
npx tsc --noEmit
npm run build
```

Before publishing, check the homepage and blog on desktop and mobile, both color themes, keyboard access to experience details, and every local image and project link.

## 📦 Deployment
You can deploy this site on [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or any platform that supports Next.js.
`netlify.toml` sets the Next.js build command and `.next` output, overriding old site settings for other frameworks.

---

**Sanchit Arora**  
[Portfolio](https://www.sanchitarora.me)
[LinkedIn](https://dub.sh/sanchit-linkedin)  
[GitHub](https://dub.sh/sanchit-github)
