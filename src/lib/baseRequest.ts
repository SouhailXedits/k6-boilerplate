import http from 'k6/http';
import { check, fail } from 'k6';
import { RequestConfig } from '../types';
import { getLogger } from './logger';

const logger = getLogger();

export function makeRequest(config: RequestConfig) {
  const { method, endpoint, headers = {}, body, validateFn } = config;
  const startTime = new Date().getTime();

  try {
    const response = http.request(method, endpoint, body, {
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });

    // Log request details
    logger.info(`${method} ${endpoint} - Status: ${response.status} - Duration: ${new Date().getTime() - startTime}ms`);

    // Custom validation if provided
    if (validateFn) {
      const isValid = validateFn(response);
      if (!isValid) {
        fail(`Custom validation failed for ${method} ${endpoint}`);
      }
    }

    // Default checks
    check(response, {
      'status is ok': (r) => r.status >= 200 && r.status < 300,
      'response time < 2s': (r) => r.timings.duration < 2000,
    });

    return response;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error(`Request failed: ${errorMessage}`);
    throw error;
  }
} 