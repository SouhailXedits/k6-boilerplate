import { TestConfig } from '../types';
import { makeRequest } from './baseRequest';
import { Options } from 'k6/options';

export function createTestConfig(config: TestConfig): Options {
  const { thresholds = {}, vus = 1, duration = '30s', sleep = 1, stages = [] } = config;
  
  return {
    thresholds,
    vus,
    duration: !stages.length ? duration : undefined,
    stages,
  };
} 