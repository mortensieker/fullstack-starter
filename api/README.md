# API Service

Backend service built with [NestJS](https://nestjs.com/) - a progressive Node.js framework for building efficient and scalable server-side applications.

## Tech Stack

- **Framework**: NestJS 11
- **Language**: TypeScript
- **Runtime**: Node.js 20
- **Testing**: Jest (unit & e2e)
- **Linting**: ESLint 9 with TypeScript ESLint
- **Formatting**: Prettier

## Quick Start

### Using Makefile (Recommended)

```bash
make help           # See all available commands
make install        # Install dependencies
make dev            # Start development server
make test           # Run all tests
make lint           # Run linter
make format         # Format code
```

### Using npm

```bash
# Install dependencies
npm install

# Development
npm run start          # Standard mode
npm run start:dev      # Watch mode (recommended)
npm run start:debug    # Debug mode

# Testing
npm test              # Unit tests
npm run test:watch    # Watch mode
npm run test:e2e      # End-to-end tests
npm run test:cov      # Coverage report

# Code Quality
npm run lint          # Check linting
npm run format        # Format code with Prettier

# Production
npm run build         # Build for production
npm run start:prod    # Run production build
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Required variables:
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)

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
docker build -t private-starter-api .
docker run -p 3000:3000 private-starter-api
```

## Project Structure

```
api/
├── src/
│   ├── app.controller.ts       # Main controller
│   ├── app.service.ts          # Main service
│   ├── app.module.ts           # Root module
│   └── main.ts                 # Entry point
├── test/                       # E2E tests
├── Dockerfile                  # Multi-stage Docker build
├── nest-cli.json              # Nest CLI config
├── tsconfig.json              # TypeScript config
└── package.json
```

## Development

The API runs on `http://localhost:3000` by default.

### Adding a New Module

```bash
nest generate module <name>
nest generate controller <name>
nest generate service <name>
```

### Running Tests

```bash
# Unit tests with watch mode
npm run test:watch

# E2E tests
npm run test:e2e

# Coverage report
npm run test:cov
```

## API Documentation

Once running, visit:
- API Root: `http://localhost:3000`
- Health Check: `http://localhost:3000` (returns "Hello World!")

## CI/CD

GitHub Actions automatically:
- Installs dependencies
- Runs linting
- Runs tests
- Builds the application
- Creates Docker image (on push to main/develop)

See [../.github/workflows/api.yml](../.github/workflows/api.yml) for the full pipeline.

## Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [NestJS Discord](https://discord.gg/G7Qnnhy)
- [Main Repository README](../README.md)

## License

See [LICENSE](../LICENSE) in the root directory.
