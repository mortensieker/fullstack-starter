# Fullstack Starter Project

This is a production-ready full-stack monorepo with two main services:
- **API** - NestJS 11 backend with TypeScript, Jest, and Docker
- **Web** - SvelteKit 2 + Svelte 5 frontend with TypeScript, Vitest, and Docker

## Project Structure

```
fullstack-starter/
├── api/          # NestJS backend service
├── web/          # SvelteKit frontend service
└── .claude/      # Claude Code configuration
    └── agents/   # Specialized agents for each service
```

## Working with This Project
https://www.anthropic.com/engineering/claude-code-best-practices

**IMPORTANT**: When working on this project, always consult the specialized agent documentation:

- **For `web/` folder work** - Read and follow `.claude/agents/web-agent.md`
  - Contains SvelteKit, Svelte 5 runes, conventions, and best practices

- **For `api/` folder work** - Read and follow `.claude/agents/api-agent.md`
  - Contains NestJS patterns, domain-driven design, and best practices
  - Critical: Always organize by domain (feature modules, not technical layers)

**These guidelines apply to all work, whether you're working directly or delegating to subagents.**

### Specialized Agents

This project has specialized agents with deep expertise in each service's tech stack:

- **web-agent** - Expert in SvelteKit, Svelte 5, and web development
  - Use when building or testing anything in the `web/` folder
  - Knows Svelte 5 runes, SvelteKit patterns, Vitest, and project conventions

- **api-agent** - Expert in NestJS, Express, and API development
  - Use when building or testing anything in the `api/` folder
  - Knows NestJS patterns, domain-driven design, Jest, and project conventions

To use a specialized agent, you can invoke it using the Task tool with the appropriate `subagent_type`:
- For web work: Use `subagent_type: "web-agent"`
- For API work: Use `subagent_type: "api-agent"`

### General Conventions

- Both services use TypeScript with strict mode
- Both services have ESLint + Prettier for code quality
- Both services use Makefiles for common tasks
- Both services support Docker deployment

### Getting Started

Each service is independent:

```bash
# API Service
cd api
make install && make dev    # http://localhost:3000

# Web Service
cd web
make install && make dev    # http://localhost:5173
```

### Quality Standards

- Always run linting and tests before completing work
- Clean up debugging code (console.log, commented code)
- Follow domain-driven organization (group by feature, not by layer)
- Write tests for new functionality
- Use TypeScript strict typing throughout
