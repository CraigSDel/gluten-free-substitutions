#!/bin/bash

# Coverage enforcement script - ensures 100% test coverage before deployment

echo "🔍 Checking test coverage requirements..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Run tests with coverage
echo "🧪 Running tests with coverage analysis..."
npm run test:coverage

# Check if coverage was successful
if [ $? -ne 0 ]; then
    echo "❌ Coverage check failed! Build cannot proceed."
    echo "📊 Current coverage is below 100% requirement."
    echo "💡 Please add more tests to achieve 100% coverage."
    exit 1
fi

echo "✅ Coverage check passed! All files have 100% test coverage."
echo "🚀 Build can proceed safely."
