# K6 Performance Testing Boilerplate

A modern, TypeScript-based boilerplate for creating and running performance tests with k6. This boilerplate provides a structured way to write, organize, and execute load tests with environment-specific configurations.

## Features

- 🎯 TypeScript support
- 🌍 Environment-specific configurations (local, staging, production)
- 🛠️ CLI tool for generating new test files
- 📊 Default performance thresholds
- 🔄 Hot reloading during development
- 📝 Type definitions for better developer experience
- 🎨 Customizable test scenarios

## Prerequisites

- Node.js (v14 or higher)
- k6 (latest version)
- npm or yarn

## Installation

Clone the repository:
```sh
git clone https://github.com/yourusername/k6-boilerplate.git
```

Install dependencies:
```sh
npm install
```

Build the project:
```sh
npm run build
```

## Project Structure

```
├── src/
│   ├── config.ts        # Environment configurations
│   ├── endpoints/       # Test files
│   │   ├── example.test.ts
│   │   └── new-endpoint.test.ts
│   ├── lib/             # Shared utilities
│   │   ├── baseRequest.ts
│   │   └── testBuilder.ts
│   ├── types/           # TypeScript type definitions
│   └── index.ts
├── scripts/
│   └── create-test.js   # Test file generator
└── dist/                # Compiled JavaScript files
```

## Usage

### Creating a New Test

Use the CLI tool to generate a new test file:
```sh
npm run create-test -- "user-login" -m POST -e "/api/auth/login"
```

Options:
- `-m, --method`: HTTP method (GET, POST, PUT, DELETE, PATCH)
- `-e, --endpoint`: API endpoint path

### Running Tests

Run in the local environment:
```sh
npm run test:local dist/endpoints/example.test.js
```

Run in the staging environment:
```sh
npm run test:staging dist/endpoints/example.test.js
```

Run in the production environment:
```sh
npm run test:prod dist/endpoints/example.test.js
```

### Development Mode

Watch for changes and rebuild:
```sh
npm run build:watch
```

## Configuration

### Environment Configuration

Edit `src/config.ts` to modify environment-specific settings:

```typescript
const environments = {
  local: {
    baseUrl: 'http://localhost:6003',
    defaultHeaders: {
      'Accept': 'application/json',
      // ... other headers
    },
    defaultThresholds: {
      'http_req_duration': ['p(95)<500', 'p(99)<1000'],
      // ... other thresholds
    }
  },
  // ... staging and production configs
};
```

### Test Configuration

Each test can be customized with the following options:

```typescript
export let options = createTestConfig({
  name: 'Test Name',
  request: {
    method: 'GET',
    endpoint: `${config.baseUrl}/path`,
    headers: config.defaultHeaders,
  },
  thresholds: config.defaultThresholds,
  stages: [
    { duration: '10s', target: 10 },
    { duration: '30s', target: 100 },
    { duration: '10s', target: 0 },
  ],
  tags: {
    testType: 'api'
  }
});
```

## Available Scripts

- `npm test` - Run k6 tests
- `npm run test:local` - Run tests in local environment
- `npm run test:staging` - Run tests in staging environment
- `npm run test:prod` - Run tests in production environment
- `npm run build` - Build the project
- `npm run build:watch` - Build and watch for changes
- `npm run create-test` - Create a new test file

## Type Definitions

The boilerplate includes TypeScript definitions for:

- Request configurations
- Test configurations
- Load profiles
- Threshold configurations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [k6](https://k6.io/) - Modern load testing tool
- [TypeScript](https://www.typescriptlang.org/) - TypeScript language
- [webpack](https://webpack.js.org/) - Module bundler

