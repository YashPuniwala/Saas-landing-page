# Overview

This is a modern SaaS landing page for "ADMYBRAND AI Suite", an AI-powered marketing tool. The application is built as a full-stack React/TypeScript project with a focus on creating stunning UI components and animations for marketing purposes. The codebase emphasizes modern design trends including glassmorphism effects, smooth animations, and mobile-first responsive design.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite for build tooling and development server
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming and glassmorphism effects
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for complex animations and transitions
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

## Component System
The application implements a reusable component library with 7+ components:
- **GlassCard**: Glassmorphism-styled containers with light/dark variants
- **GradientButton**: Multi-variant gradient buttons with animation support
- **AnimatedBadge**: Floating badges with icon support and animations
- **FeatureCard**: Feature showcase cards with hover effects
- **PricingCard**: Pricing tier cards with popular highlighting
- **TestimonialCard**: Customer review cards with ratings
- **AnimatedCounter**: Number counting animations for statistics

## Backend Architecture
- **Server**: Express.js with TypeScript running on Node.js
- **Database Integration**: Drizzle ORM configured for PostgreSQL with migration support
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **API Structure**: RESTful API design with `/api` prefix routing
- **Development**: Hot reload with Vite middleware integration

## Design System
- **Theme**: Custom CSS variables supporting light/dark modes with brand colors
- **Typography**: Hierarchical text styling with responsive font sizing
- **Animation Library**: Predefined animation objects for consistent motion design
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Glass Effects**: Custom glassmorphism styling with backdrop blur and transparency

## External Dependencies

- **Database**: PostgreSQL via Neon Database serverless driver
- **UI Framework**: Radix UI primitives for accessible components
- **Animation**: Framer Motion for advanced animations and gestures
- **Form Validation**: Zod schema validation with React Hook Form integration
- **Styling**: Tailwind CSS with PostCSS for processing
- **Icons**: Lucide React icon library
- **Development**: Replit-specific plugins for runtime error handling and cartographer integration
- **Image Optimization**: Unsplash integration for placeholder images in testimonials
- **Date Handling**: date-fns library for date formatting and manipulation