# Deployment Guide

This project is automatically deployed to GitHub Pages using GitHub Actions.

## Automatic Deployment Setup

### GitHub Pages Configuration

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The deployment will be handled automatically by the workflow

### Workflows

#### Deploy Workflow (`.github/workflows/deploy.yml`)
- **Triggers**: Push to `main` or `master` branches
- **Actions**:
  - Installs dependencies
  - Runs unit tests
  - Builds the application
  - Deploys to GitHub Pages

#### CI Workflow (`.github/workflows/ci.yml`)
- **Triggers**: Push and pull requests to `main`, `master`, or `develop` branches
- **Actions**:
  - Runs linting
  - Type checking
  - Unit tests
  - Integration tests
  - Build verification

## Manual Deployment

If you need to deploy manually:

```bash
# Install dependencies
npm ci

# Run tests
npm run test:unit

# Build the application
npm run build

# The dist/ folder contains the built application
# This will be automatically deployed by GitHub Actions
```

## Environment Variables

No environment variables are required for the build process. The application uses static data and doesn't require external API keys.

## Troubleshooting

### Build Failures
- Check the Actions tab in your GitHub repository
- Ensure all tests pass locally before pushing
- Verify that the base path in `vite.config.ts` is set correctly for GitHub Pages

### 404 Errors
- Ensure the `base` path in `vite.config.ts` matches your repository name
- Current setting: `base: '/gluten-free-substitutions/'`
- If you change the repository name, update this path accordingly

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build

# Preview production build
npm run preview
```
