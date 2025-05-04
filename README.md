# Octomigo

A modern web application built with Next.js, React, and GraphQL, featuring a beautiful and responsive user interface.

## 🚀 Features

- Built with Next.js 15 and React 19
- GraphQL integration with Apollo Client
- Modern UI components using Radix UI
- TypeScript for type safety
- Tailwind CSS for styling
- Command palette functionality with cmdk
- State management with Immer

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **UI Library:** React 19
- **Styling:** Tailwind CSS
- **GraphQL Client:** Apollo Client
- **UI Components:** Radix UI
- **State Management:** Immer
- **Command Palette:** cmdk
- **Code Quality:** ESLint, Prettier

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/octomigo.git
cd octomigo
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

## 🏗️ Project Structure

```
src/
├── app/          # Next.js app router pages
├── components/   # Reusable UI components
├── graphql/      # GraphQL queries and mutations
├── hooks/        # Custom React hooks
├── lib/          # Utility functions and configurations
├── providers/    # Context providers
└── services/     # API and external service integrations
```

## 🧪 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
