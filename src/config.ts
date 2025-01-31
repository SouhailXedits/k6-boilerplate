interface EnvironmentConfig {
  baseUrl: string;
  defaultHeaders: Record<string, string>;
  defaultThresholds: Record<string, string[]>;
}

const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NThiZjg5YWQ4YzQwNDBhMjM0MGQwNTAiLCJ3b3Jrc3BhY2UiOiI2NzljN2VhYmFmZTEwZTUyMzllNmUwOTgiLCJpYXQiOjE3MzgzMDkyOTIsImV4cCI6MTczODM4ODQ5Mn0.UuSYeH8ntBn1qKUFmR3C2xcwCu1j6EIgxcy8Lsii2fxYWiZYMkl1jVozKivZDHDR3BLi34Wh_Un4uvzBkgPO63gzK8CZF520d5WPWJEnSYgPno0_6tdr9Z8jsmVIozMfZrBCGBEDUS1jGXnjEzxLmXbdOIK1ePPcdnHXX30fc5Ndqk_DVRNTQdfSrLg72wSAPeYRzTDfw9Os9QvhMFnLpvYkmG2pwu41PHC7cXe_s83P8nYmFBSAOgUwBZonmEMcfIXDXTUYKKE7vdH54b9jUIt9AcQGZhb-TzOP7tiSo_FXdgH499V276D_rsso4FMp-0AYnsHjX3peY0zPCg1lG-aGAynVi0SmnGds7njWUIv3mnSknuXXk5BQIRKKh2FwOd-1ucFWc2xXzLN2y6jvX5q28x722TaXb3LrEU2IoEgcHwfXPP2SNy292wjHFrPO1vQhuIX8ybxNKRYo9BP_m4wPzIIuIwG84SOW3KdG8VtZIDwDzp0jgEZ59q5ELZS1pxMY5jDyorWt01h46A38wyIvh6jgwhMmxEtDh23ADE7f6PG-WTe_uypzU6NGICEqUX2lhihjZfBUuHZpTAhf-7_11Dye27EnlKM2x8HQND6uXDzNGuOMr4PmSwmA7X3JmSHNxSB6h4H9OMG4aQWJVz8-tlBglfAGsCDt-L2p3ig'

const environments: Record<string, EnvironmentConfig> = {
  local: {
    baseUrl: 'http://localhost:6003',
    defaultHeaders: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      "x-workspace": "679c7eabafe10e5239e6e098"
    },
    defaultThresholds: {
      'http_req_duration': ['p(95)<500', 'p(99)<1000'],
      'http_req_failed': ['rate<0.01'],
    },
  },
  staging: {
    baseUrl: 'https://staging-api.example.com',
    defaultHeaders: {
      'Accept': 'application/json',
    },
    defaultThresholds: {
      'http_req_duration': ['p(95)<1000', 'p(99)<2000'],
      'http_req_failed': ['rate<0.02'],
    },
  },
  production: {
    baseUrl: 'https://api.example.com',
    defaultHeaders: {
      'Accept': 'application/json',
    },
    defaultThresholds: {
      'http_req_duration': ['p(95)<300', 'p(99)<500'],
      'http_req_failed': ['rate<0.01'],
    },
  },
};

const ENV = __ENV.ENVIRONMENT || 'local';
export const config = environments[ENV]; 