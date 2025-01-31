import { Options } from 'k6/options';
import { makeRequest } from '../lib/baseRequest';
import { createTestConfig } from '../lib/testBuilder';
import { withRetry, randomSleep } from '../lib/testHelpers';
import { config } from '../config';
import { defaultMetrics } from '../lib/metrics';

export let options: Options = createTestConfig({
  name: 'Enhanced Example Test',
  request: {
    method: 'GET',
    endpoint: `${config.baseUrl}/api/users`,
    headers: config.defaultHeaders,
    validateFn: (response) => {
      const data = response.json();
      return Array.isArray(data) && data.length > 0;
    },
  },
  thresholds: {
    ...config.defaultThresholds,
    'business_logic_duration': ['p(95)<1000'],
  },
  stages: [
    { duration: '1m', target: 10 },
    { duration: '3m', target: 50 },
    { duration: '1m', target: 0 },
  ],
  tags: {
    testType: 'api',
    component: 'users',
  },
  metrics: defaultMetrics,
});

export function setup() {
  // Setup code here
  return { startTime: new Date().toISOString() };
}

export default function(data: any) {
  withRetry({
    method: 'GET',
    endpoint: `${config.baseUrl}/api/users`,
    headers: config.defaultHeaders,
  });

  randomSleep(1, 3);
}

export function teardown(data: any) {
  // Cleanup code here
} 