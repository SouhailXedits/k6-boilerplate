import { sleep } from 'k6';
import { RequestConfig, RetryConfig } from '../types';
import { makeRequest } from './baseRequest';
import { getLogger } from './logger';

const logger = getLogger();

export function withRetry(
  requestConfig: RequestConfig,
  retryConfig: RetryConfig = { maxRetries: 3, backoffFactor: 1.5, initialWait: 1000 }
) {
  const { maxRetries, backoffFactor, initialWait } = retryConfig;
  let attempt = 0;
  let waitTime = initialWait;

  while (attempt < maxRetries) {
    try {
      return makeRequest(requestConfig);
    } catch (error) {
      attempt++;
      if (attempt === maxRetries) throw error;
      
      logger.warn(`Request failed, retrying (${attempt}/${maxRetries}) in ${waitTime}ms`);
      sleep(waitTime / 1000); // k6 sleep expects seconds
      waitTime *= backoffFactor;
    }
  }
}

export function randomSleep(min: number, max: number) {
  const sleepTime = Math.random() * (max - min) + min;
  sleep(sleepTime);
} 