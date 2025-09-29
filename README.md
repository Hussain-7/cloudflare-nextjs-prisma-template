# 🚀 Next.js Cloudflare Template

A production-ready Next.js template optimized for Cloudflare deployment with all the essential packages and best practices for modern web development.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/your-username/nextjs-cloudflare-template)

## ✨ Features

- **⚡ Next.js 15** - Latest App Router with Turbopack for lightning-fast development
- **☁️ Cloudflare Ready** - Optimized for Cloudflare Pages/Workers deployment
- **🎨 Tailwind CSS 4** - Latest version with enhanced performance
- **🗃️ Database Ready** - Prisma ORM with PostgreSQL and Accelerate integration
- **🧪 Testing Suite** - Vitest, React Testing Library, and Playwright E2E tests
- **📱 State Management** - Zustand for lightweight, type-safe state management
- **🔍 Type Safety** - Full TypeScript configuration with strict mode
- **📏 Code Quality** - ESLint, Prettier, and pre-commit hooks
- **📊 UI Components** - shadcn/ui compatible setup with CVA and utilities
- **🔧 Developer Experience** - Hot reload, devtools, and comprehensive tooling

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 15 with App Router |
| **Runtime** | Cloudflare Workers/Pages |
| **Language** | TypeScript 5.x |
| **Styling** | Tailwind CSS 4.x |
| **Database** | PostgreSQL + Prisma + Accelerate |
| **State Management** | Zustand 5.x |
| **Testing** | Vitest + React Testing Library + Playwright |
| **Package Manager** | pnpm (recommended) |
| **Code Quality** | ESLint + Prettier |
| **UI Utilities** | CVA, clsx, tailwind-merge |
| **Forms** | React Hook Form + Zod validation |
| **Icons** | Lucide React |
| **Data Fetching** | TanStack Query |

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or later
- pnpm (recommended) or npm
- PostgreSQL database (local or cloud)

### 1. Use this template

```bash
# Clone the repository
git clone https://github.com/Hussain-7/cloudflare-nextjs-prisma-template.git my-app
cd my-app

# Install dependencies
pnpm install
```

### 2. Environment Setup

```bash
# Copy environment variables
cp .env.example .env.local

# For Cloudflare (optional)
cp .dev.vars.example .dev.vars
```

Update your environment variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/mydb"

# Cloudflare (optional)
# Add your Cloudflare-specific variables in .dev.vars
```

### 3. Database Setup

```bash
# Generate Prisma client
pnpm generate

# Run database migrations
pnpm migrate

# Seed database (optional)
pnpm seed
```

### 4. Start Development

```bash
# Start development server with Turbopack
pnpm dev

# Open http://localhost:3000
```

## 📁 Project Structure

```
├── app/                     # Next.js App Router
│   ├── api/                # API routes
│   ├── components/         # React components
│   │   └── __tests__/      # Component tests
│   ├── lib/               # Utilities and configurations
│   │   └── db/            # Database connection
│   ├── stores/            # Zustand state stores
│   │   └── __tests__/     # Store tests
│   └── types/             # TypeScript type definitions
├── e2e/                    # Playwright E2E tests
├── prisma/                 # Database schema and migrations
│   ├── schema.prisma      # Database schema
│   └── seed.ts           # Database seed data
├── public/                # Static assets
├── tests/                 # Test configuration and utilities
│   └── setup.ts          # Test setup file
├── .claude.md             # AI development context
├── playwright.config.ts   # E2E test configuration
├── vitest.config.mjs      # Unit test configuration
└── next.config.ts         # Next.js configuration
```

## 🧪 Testing

This template includes a comprehensive testing setup:

### Unit Tests (Vitest + React Testing Library)

```bash
# Run tests in watch mode
pnpm test

# Run tests once
pnpm test:run

# Run tests with UI
pnpm test:ui

# Run tests with coverage
pnpm test:coverage
```

### E2E Tests (Playwright)

```bash
# Run E2E tests
pnpm test:e2e

# Run E2E tests with UI
pnpm test:e2e:ui

# Run E2E tests in headed mode
pnpm test:e2e:headed
```

## 📏 Code Quality

### Linting and Formatting

```bash
# Run ESLint
pnpm lint

# Run TypeScript check
pnpm typecheck

# Format code with Prettier
pnpm format

# Check formatting
pnpm format:check
```

## 🗃️ Database Management

### Prisma Commands

```bash
# Generate Prisma client
pnpm generate

# Create and run migrations
pnpm migrate

# Reset database
pnpm prisma db reset

# Open Prisma Studio
pnpm studio

# Seed database
pnpm seed
```

### Custom Database Schema

1. Edit `prisma/schema.prisma`
2. Create migration: `pnpm prisma migrate dev --name your-migration`
3. Update seed data in `prisma/seed.ts`
4. Generate types: `pnpm generate`

## 🏗️ State Management

Zustand stores are located in `app/stores/`:

```typescript
// Example store usage
import { useAppStore } from '@/stores'

function MyComponent() {
  const { theme, setTheme } = useAppStore()
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  )
}
```

## 🎨 Styling

### Tailwind CSS 4

This template uses the latest Tailwind CSS with:
- CSS-first configuration
- Enhanced performance
- Built-in container queries
- Modern CSS features

### UI Components

Ready for shadcn/ui integration with:
- Class Variance Authority (CVA)
- clsx and tailwind-merge utilities
- Consistent design tokens

## 🚀 Deployment

### Cloudflare Pages/Workers

```bash
# Build for production
pnpm build

# Deploy to Cloudflare
pnpm deploy

# Preview deployment locally
pnpm preview
```

### Environment Variables

For Cloudflare deployment, add your environment variables in:
- **Local development**: `.dev.vars`
- **Production**: Cloudflare Dashboard → Pages/Workers → Settings → Environment Variables

### Build Optimization

The template is optimized for Cloudflare with:
- Server-side rendering
- Edge runtime compatibility
- Minimal bundle size
- Fast cold starts

## 📦 Package Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server with Turbopack |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run TypeScript check |
| `pnpm format` | Format code with Prettier |
| `pnpm test:run` | Run unit tests |
| `pnpm test:e2e` | Run E2E tests |
| `pnpm generate` | Generate Prisma client |
| `pnpm migrate` | Run database migrations |
| `pnpm studio` | Open Prisma Studio |
| `pnpm seed` | Seed database |
| `pnpm deploy` | Deploy to Cloudflare |

## 🔧 Customization

### 1. Remove Example Code

- Delete `app/api/brainlifts/` (example API)
- Update `app/stores/` with your own stores
- Modify `prisma/schema.prisma` for your data model
- Update `app/types/index.ts` with your types

### 2. Add Your Components

```bash
mkdir app/components/ui
# Add your components here
```

### 3. Configure for Your Needs

- Update `next.config.ts` for custom webpack config
- Modify `tailwind.config.ts` for custom design system
- Edit `tsconfig.json` for TypeScript preferences

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This template is MIT licensed. See [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) team for the amazing framework
- [Cloudflare](https://cloudflare.com) for the edge platform
- [Vercel](https://vercel.com) for development tools
- [Prisma](https://prisma.io) for the database toolkit
- All the open source contributors

---

**Happy coding!** 🎉

If this template helped you, please give it a ⭐ on GitHub!
