# fullstack-starter
A production-ready full-stack monorepo starter template with NestJS (API) and SvelteKit (web) services. Includes Docker support, CI/CD pipelines, automated dependency management, and comprehensive development tooling.

## Quick Start
### Prerequisites

- Node.js 20 (use `.nvmrc` with nvm: `nvm use`)
- npm (comes with Node.js)
- Docker (optional, for containerization)

### Getting Started
Each service has its own Makefile with all commands:

```bash
# API Service
cd api
make help           # See all available commands
make install        # Install dependencies
make dev            # Start development server (http://localhost:3000)
make test           # Run tests
make lint           # Lint code

# Web Service
cd web
make help           # See all available commands
make install        # Install dependencies
make dev            # Start development server (http://localhost:5173)
make build          # Build for production
make lint           # Lint code
```

### Using Docker

```bash
# API
cd api
make docker-build   # Build Docker image
make docker-run     # Run container on port 3000

# Web
cd web
make docker-build   # Build Docker image
make docker-run     # Run container on port 3000
```