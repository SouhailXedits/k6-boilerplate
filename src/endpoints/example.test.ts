import { Options } from 'k6/options';
import { makeRequest } from '../lib/baseRequest';
import { createTestConfig } from '../lib/testBuilder';
import { BASE_URL, DEFAULT_HEADERS } from '../config';

export let options: Options = createTestConfig({
  name: 'Get User Profile',
  request: {
    method: 'GET',
    endpoint: `${BASE_URL}`,
    headers: DEFAULT_HEADERS,
  },
  thresholds: {
    'http_req_duration': ['p(95)<500', 'p(99)<1000'], // 95% of requests should be below 500ms, 99% of requests should be below 1000ms
    'http_req_failed': ['rate<0.01'],    // Less than 1% of requests should fail
  },
//   vus: 10,
//   duration: '2s',
  tags: {
    'test': 'example',
  },
  sleep: 1,
  stages: [
    { duration: '10s', target: 10 },
    { duration: '10s', target: 0 },
  ],
});

export default function() {
  makeRequest({
    method: 'GET',
    endpoint: `${BASE_URL}`,
    headers: DEFAULT_HEADERS,
  });
} 