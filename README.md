# Next.js + shadcn/ui Starter

A modern, production-ready Next.js starter template with TypeScript, Tailwind CSS v3, and shadcn/ui components.

## 🚀 Tech Stack

- **[Next.js 16](https://nextjs.org)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS v3](https://tailwindcss.com/)** - Utility-first CSS framework (stable version)
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Lucide Icons](https://lucide.dev/)** - Beautiful icon library

## 📦 Pre-installed Components

The following shadcn/ui components are already set up:

- Button
- Card
- Input
- Label
- Badge
- Avatar
- Dropdown Menu

## 🏃 Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 📁 Project Structure

```
.
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   └── ui/                # shadcn/ui components
├── lib/
│   └── utils.ts           # Utility functions
├── docs/                  # Project documentation
├── public/                # Static assets
└── components.json        # shadcn/ui configuration
```

## 🎨 Adding More Components

Add any shadcn/ui component using the CLI:

```bash
npx shadcn@latest add [component-name]
```

Examples:

```bash
# Add a single component
npx shadcn@latest add dialog

# Add multiple components
npx shadcn@latest add dialog alert toast

# Browse all available components
npx shadcn@latest add
```

Visit [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components) to see all available components.

## 🛠️ Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Features

- ✅ Next.js 16 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS v3 for styling (stable version)
- ✅ shadcn/ui components pre-configured
- ✅ Dark mode support
- ✅ ESLint configuration
- ✅ Path aliases configured (`@/`)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🚢 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
