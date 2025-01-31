const fs = require('fs');
const path = require('path');
const { program } = require('commander');

program
  .name('create-test')
  .description('Create a new k6 test file')
  .argument('<name>', 'name of the test file')
  .option('-m, --method <method>', 'HTTP method', 'GET')
  .option('-e, --endpoint <endpoint>', 'API endpoint', '/')
  .parse();

const options = program.opts();
const testName = program.args[0];

const template = `import { Options } from 'k6/options';
import { makeRequest } from '../lib/baseRequest';
import { createTestConfig } from '../lib/testBuilder';
import { config } from '../config';

export let options: Options = createTestConfig({
  name: '${testName}',
  request: {
    method: '${options.method}',
    endpoint: \`\${config.baseUrl}${options.endpoint}\`,
    headers: config.defaultHeaders,
  },
  thresholds: config.defaultThresholds,
  stages: [
    { duration: '10s', target: 10 },
    { duration: '30s', target: 100 },
    { duration: '10s', target: 0 },
  ],
});

export default function() {
  makeRequest({
    method: '${options.method}',
    endpoint: \`\${config.baseUrl}${options.endpoint}\`,
    headers: config.defaultHeaders,
    // Uncomment and modify if needed
    // body: JSON.stringify({
    //   key: 'value'
    // })
  });
}`;

const testPath = path.join(__dirname, '..', 'src', 'endpoints', `${testName}.test.ts`);
fs.writeFileSync(testPath, template);
console.log(`Created test file: ${testPath}`); 