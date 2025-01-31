import { Trend, Counter, Rate, Gauge } from 'k6/metrics';

export class MetricsBuilder {
  private metrics: Record<string, any> = {};

  addTrend(name: string, description?: string) {
    this.metrics[name] = new Trend(name, true);
    return this;
  }

  addCounter(name: string, description?: string) {
    this.metrics[name] = new Counter(name);
    return this;
  }

  addRate(name: string, description?: string) {
    this.metrics[name] = new Rate(name);
    return this;
  }

  addGauge(name: string, description?: string) {
    this.metrics[name] = new Gauge(name);
    return this;
  }

  getMetrics() {
    return this.metrics;
  }
}

export const defaultMetrics = new MetricsBuilder()
  .addTrend('business_logic_duration')
  .addCounter('custom_errors')
  .addRate('successful_requests')
  .getMetrics(); 