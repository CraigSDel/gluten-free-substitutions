#!/bin/bash

# Test build script - simulates the GitHub Actions build process locally

echo "🧪 Testing build process locally..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run linting
echo "🔍 Running linting..."
npm run lint

# Run type checking
echo "🔧 Running type checking..."
npm run type-check

# Check test coverage (100% required)
echo "🔍 Checking test coverage (100% required)..."
./scripts/check-coverage.sh

# Run integration tests
echo "🔗 Running integration tests..."
npm run test:integration

# Build the application
echo "🏗️ Building application..."
npm run build

# Check if build was successful
if [ -d "dist" ] && [ -f "dist/index.html" ]; then
    echo "✅ Build successful! Files created in dist/ directory"
    echo "📁 Build contents:"
    ls -la dist/
    echo ""
    echo "🌐 You can test the build locally with: npm run preview"
else
    echo "❌ Build failed! Check the output above for errors."
    exit 1
fi
