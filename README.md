# 🚀 DevOps Demo Project

A comprehensive demonstration of DevOps practices using GitHub Actions, featuring automated testing, linting, and deployment to GitHub Pages.

## 🌟 Features

- **Automated CI/CD Pipeline**: Every push and PR triggers automated quality checks
- **Comprehensive Testing**: Unit tests for all calculator functions
- **Code Quality Checks**: Automated linting to maintain code standards
- **Branch Protection**: PRs must pass all checks before merging
- **Automated Deployment**: Successful builds on main branch auto-deploy to GitHub Pages
- **Interactive Demo**: Simple calculator app to demonstrate functionality

## 🏗️ Project Structure

```
devops-demo/
├── .github/
│   └── workflows/
│       ├── ci-cd.yml          # Main CI/CD pipeline
│       └── pr-check.yml       # PR quality gate
├── index.html                 # Main page
├── styles.css                 # Styling
├── script.js                  # JavaScript functionality
├── test.js                    # Test suite
├── lint.js                    # Code quality checker
├── package.json               # Project configuration
└── README.md                  # This file
```

## 🔄 DevOps Workflow

### 1. Pull Request Process
1. Developer creates a feature branch
2. Opens a Pull Request to `main`
3. GitHub Actions automatically runs:
   - Code linting checks
   - Unit test suite
   - Build verification
4. PR can only be merged if all checks pass

### 2. Deployment Process
1. Code merged to `main` branch
2. GitHub Actions runs full CI/CD pipeline:
   - Runs all quality checks
   - Builds the project
   - Deploys to GitHub Pages

## 🧪 Testing

Run tests locally:
```bash
npm test
```

Run linting:
```bash
npm run lint
```

## 🚀 Local Development

Start local server:
```bash
npm start
```

Then visit `http://localhost:8000`

## 🔧 GitHub Actions Workflows

### CI/CD Pipeline (`ci-cd.yml`)
- Triggers on push to main and PRs
- Runs linting, testing, and build
- Deploys to GitHub Pages on main branch

### PR Status Check (`pr-check.yml`)
- Runs on every PR
- Provides detailed quality gate checks
- Must pass before PR can be merged

## 🎯 Demo Scenarios

This project demonstrates several DevOps best practices:

1. **Failing Tests**: Try modifying the test expectations to see how failed tests block deployment
2. **Linting Errors**: Add console.log statements to see linting failures
3. **Successful PR**: Create proper changes that pass all checks

## 🔒 Branch Protection

The repository should be configured with branch protection rules:
- Require status checks to pass before merging
- Require branches to be up to date before merging
- Restrict pushes to main branch

## 📊 Quality Metrics

- ✅ Unit test coverage
- ✅ Code linting compliance
- ✅ Build success rate
- ✅ Deployment automation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure all tests pass
5. Submit a Pull Request

## 📝 License

MIT License - see the LICENSE file for details.