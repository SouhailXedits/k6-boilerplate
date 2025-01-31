import { TestConfig } from '../types';
import { makeRequest } from './baseRequest';
import { Options } from 'k6/options';
import { defaultMetrics } from './metrics';

export function createTestConfig(config: TestConfig): Options {
  const {
    thresholds = {},
    vus = 1,
    duration = '30s',
    sleep = 1,
    stages = [],
    metrics = defaultMetrics,
  } = config;
  
  // Register metrics globally instead of passing to options
  Object.values(metrics).forEach(metric => metric);
  
  return {
    thresholds: {
      ...thresholds,
      'successful_requests': ['rate>0.95'], // 95% success rate by default
    },
    vus,
    duration: !stages.length ? duration : undefined,
    stages,
    tags: config.tags,
    setupTimeout: '1m',
    teardownTimeout: '1m',
    noConnectionReuse: true,
    userAgent: 'K6PerformanceTest/1.0',
  };
} 