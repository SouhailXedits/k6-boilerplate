export interface RequestConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  endpoint: string;
  headers?: { [key: string]: string };
  body?: any;
}

export interface ThresholdConfig {
  [key: string]: string[];
}

export interface TestConfig {
  name: string;
  request: RequestConfig;
  thresholds?: ThresholdConfig;
  vus?: number;
  duration?: string;
  tags?: { [key: string]: string };
  sleep?: number;
  stages?: { duration: string; target: number }[];
} 