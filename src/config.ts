interface EnvironmentConfig {
  baseUrl: string;
  defaultHeaders: Record<string, string>;
  defaultThresholds: Record<string, string[]>;
}

const token = 'token.here'

const environments: Record<string, EnvironmentConfig> = {
  local: {
    baseUrl: 'http://localhost:3000',
    defaultHeaders: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    defaultThresholds: {
      'http_req_duration': ['p(95)<500', 'p(99)<1000'],
      'http_req_failed': ['rate<0.01'],
    },
  },
  staging: {
    baseUrl: 'https://staging-api.example.com',
    defaultHeaders: {
      'Accept': 'application/json',
    },
    defaultThresholds: {
      'http_req_duration': ['p(95)<1000', 'p(99)<2000'],
      'http_req_failed': ['rate<0.02'],
    },
  },
  production: {
    baseUrl: 'https://api.example.com',
    defaultHeaders: {
      'Accept': 'application/json',
    },
    defaultThresholds: {
      'http_req_duration': ['p(95)<300', 'p(99)<500'],
      'http_req_failed': ['rate<0.01'],
    },
  },
};

const ENV = __ENV.ENVIRONMENT || 'local';
export const config = environments[ENV]; 