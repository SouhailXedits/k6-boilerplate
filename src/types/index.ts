import { Response } from 'k6/http';

export interface RequestConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  endpoint: string;
  headers?: { [key: string]: string };
  body?: any;
  validateFn?: (response: Response) => boolean;
  retryConfig?: RetryConfig;
}

export interface RetryConfig {
  maxRetries: number;
  backoffFactor: number;
  initialWait: number;
}

export interface ThresholdConfig {
  [key: string]: string[];
}

export interface LoadProfile {
  stages?: { duration: string; target: number }[];
  vus?: number;
  duration?: string;
}

export interface TestConfig extends LoadProfile {
  name: string;
  request: RequestConfig;
  thresholds?: ThresholdConfig;
  tags?: { [key: string]: string };
  sleep?: number;
  teardown?: () => void;
  setup?: () => any;
  metrics?: Record<string, any>;
}

export interface Environment {
  name: string;
  baseUrl: string;
  defaultHeaders: Record<string, string>;
  defaultThresholds: Record<string, string[]>;
  rateLimit?: number;
  timeout?: number;
} 