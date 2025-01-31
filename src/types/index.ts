export interface RequestConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  endpoint: string;
  headers?: { [key: string]: string };
  body?: any;
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
} 