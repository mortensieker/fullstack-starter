# GitHub Actions Workflows

## Workflows

- **api.yml** - API build, test, and Docker image creation
- **web.yml** - Web build, test, and Docker image creation
- **_docker-build-push.yml** - Shared reusable workflow for Docker operations

## Local Testing with act

Install `act`:
```bash
# macOS
brew install act

# Linux
curl https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash
```

### Test API workflow
```bash
# Test build-test job only (recommended)
act -W .github/workflows/api.yml -j build-test

# Test with specific event
act push -W .github/workflows/api.yml

# Dry run to see what would execute
act -n -W .github/workflows/api.yml
```

### Test web workflow
```bash
# Test build-test job only (recommended)
act -W .github/workflows/web.yml -j build-test

# Test with specific event
act push -W .github/workflows/web.yml
```

### Notes

- Docker jobs may not work locally (require GitHub secrets)
- Focus on testing build-test jobs
- Use `-n` flag for dry runs
- Use `--container-architecture linux/amd64` if on ARM Mac

## Manual Triggering

Both api.yml and web.yml support manual triggers via `workflow_dispatch`:
1. Go to Actions tab in GitHub
2. Select the workflow (API CI/CD or Web CI/CD)
3. Click "Run workflow" button
4. Choose the branch and run
