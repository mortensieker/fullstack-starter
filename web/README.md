# Web Service

Frontend application built with [SvelteKit](https://kit.svelte.dev/) and [Svelte 5](https://svelte.dev/) - a modern web framework for building fast, reactive user interfaces.

## Tech Stack

- **Framework**: SvelteKit 2
- **UI Library**: Svelte 5
- **Language**: TypeScript
- **Build Tool**: Vite 7
- **Runtime**: Node.js 20
- **Adapter**: Node adapter (for Docker deployment)

## Quick Start

### Using Makefile (Recommended)

```bash
make help           # See all available commands
make install        # Install dependencies
make dev            # Start development server
make build          # Build for production
make preview        # Preview production build
```

### Using npm

```bash
# Install dependencies
npm install

# Development
npm run dev         # Start dev server
npm run dev -- --open  # Start and open in browser

# Production
npm run build       # Build for production
npm run preview     # Preview production build

# Code Quality
npm run check       # Type checking with svelte-check
npm run lint        # Run ESLint
npm run format      # Format code with Prettier
```

## Environment Variables

Create a `.env` file based on `.env.example` if you need environment variables:

```bash
cp .env.example .env
```

## Docker

```bash
# Build image
make docker-build

# Run container
make docker-run

# Stop container
make docker-stop
```

Or manually:

```bash
docker build -t private-starter-web .
docker run -p 3000:3000 private-starter-web
```

## Project Structure

```
web/
├── src/
│   ├── routes/                 # SvelteKit routes
│   │   └── +page.svelte       # Home page
│   ├── lib/                   # Shared components & utilities
│   └── app.html               # HTML template
├── static/                    # Static assets
├── Dockerfile                 # Multi-stage Docker build
├── svelte.config.js          # SvelteKit config
├── vite.config.ts            # Vite config
├── tsconfig.json             # TypeScript config
└── package.json
```

## Development

The web app runs on `http://localhost:5173` by default in development mode.

### Creating Routes

SvelteKit uses filesystem-based routing:

```
src/routes/
├── +page.svelte          # /
├── about/
│   └── +page.svelte      # /about
└── blog/
    ├── +page.svelte      # /blog
    └── [slug]/
        └── +page.svelte  # /blog/[slug]
```

### Creating Components

Place reusable components in `src/lib/`:

```svelte
<!-- src/lib/Button.svelte -->
<script lang="ts">
  let { onClick, children } = $props();
</script>

<button onclick={onClick}>
  {@render children()}
</button>
```

## Testing

Testing setup with Vitest is included:

```bash
npm test              # Run tests
npm run test:watch    # Watch mode
```

## Type Checking

```bash
npm run check         # Check TypeScript and Svelte types
```

## CI/CD

GitHub Actions automatically:

- Installs dependencies
- Runs type checking
- Runs linting
- Builds the application
- Creates Docker image (on push to main/develop)

See [../.github/workflows/web.yml](../.github/workflows/web.yml) for the full pipeline.

## Building for Production

```bash
npm run build
```

The build output is optimized and ready for deployment. The Node adapter is configured, so the built application can be run with:

```bash
node build
```

## Resources

- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [Svelte 5 Documentation](https://svelte.dev/docs/svelte/overview)
- [Vite Documentation](https://vitejs.dev/)
- [Main Repository README](../README.md)

## License

See [LICENSE](../LICENSE) in the root directory.
