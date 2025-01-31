import { Options } from 'k6/options';
import { makeRequest } from '../lib/baseRequest';
import { BASE_URL, DEFAULT_HEADERS } from '../config';

export let options: Options = {
  thresholds: {
    'http_req_duration': ['p(95)<300'],
    'http_req_failed': ['rate<0.05']
  },
//   vus: 10,
//   duration: '30s',
  stages: [
    { duration: '10s', target: 10 },
    { duration: '30s', target: 5000 },
    { duration: '10s', target: 0 },
  ],
};

export default function() {
  makeRequest({
    method: 'GET',
    endpoint: `${BASE_URL}/v1/auth/me/profile`,
    headers: {
      ...DEFAULT_HEADERS,
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGJmODlhZDhjNDA0MGEyMzQwZDA1MCIsInN1YiI6IjY1OGJmODlhZDhjNDA0MGEyMzQwZDA1MCIsInVzZXJuYW1lIjoieW91c3NlZmJvdXJvdXJvdTkwIiwid29ya3NwYWNlIjoiNjU5OWJjMjNiZGE4ZWUwMGQ2ZDdmMzljIiwid29ya3NwYWNlTmFtZSI6IlNvZnR5bGluZXMgNjU5OWJjMjNiZGE4ZWUwMGQ2ZDdmMzljIiwiaXNWZXJpZmllZCI6dHJ1ZSwibGFuZyI6ImVuIiwiaWF0IjoxNzM4MjQ2Njg4LCJleHAiOjE3MzgzMjU4ODh9.JjwMm-j0B2XSObq5bVQes91KjPDEXQ2qMU0qtnM8-twzJFddIzU0G9Ndfi3USfScWbwrtOCKa1k-LGfwTgwCQdsz4rP6rQVOV0-7uA1BrBDbznFbWMSr44HF-SFOFieH8xW7rdEAWt0UDCwhmNf-fou8B0aJanC11XQubgVZCy4-uMpnfSjKUchbOAtRbRqImT7ZMPtnGPBvJxfTcPXHNaZ1Gx2kWRiaDwpfQsbTGxcCmMbNn8HZUa6qEeGhSbmNeq9v4NYdbrOAzw7w2NN4TIPtAKApa-c3vC8O5GPmmx_9TdBZHxfgmFXsalzc5MUDphFlZ51xIB_GiihJiO58wQ3M8oZtLMBAMVt4G5JpH2MGbXKPmYrrpQeR0iEDu1etdLJKqir_66ttW11osCnHDSaZ-L1vB7dIg9UeCP05cZ1CIWv_tPKbYWUIsBkLmcCjcF29EDFgomVumRj5-m8-LldAdUVje-hHQNeTvJX29RgRODW1fZo-ccnJv-EIAM3EpDHGyoTw6BcGhNDovepG8FCvMtGrWfAsTf-0KkOA6vRzmXtIVfceIUg01FDIKp_8M9GEac2mkDW7Hduga923ULbPqPpaX3JG-kjE7oGBnzG8XigiKGDovW3Ry1BCNMd-ZqPOaXDUasZQ7FpZIWB7W7XzaUHbUcFAIUv_nakq6rE',
      'X-Workspace': '6599bc23bda8ee00d6d7f39c',
    },
    // body: JSON.stringify({
    //   key: 'value'
    // })
  });
} 