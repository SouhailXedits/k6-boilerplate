import http from 'k6/http';
import { check } from 'k6';
import { RequestConfig } from '../types';

export function makeRequest(config: RequestConfig) {
  const { method, endpoint, headers = {}, body } = config;

  const response = http.request(method, endpoint, body, {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });

  console.log(response.status);

//   check(response, {
//     'status is 200': (r) => r.status === 200,
//   });


  return response;
} 