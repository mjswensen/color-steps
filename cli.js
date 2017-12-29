#!/usr/bin/env node

try {
  const steps = require('./index')(...process.argv.slice(2));
  process.stdout.write(steps.join('\n'));
  process.stdout.write('\n');
} catch (e) {
  process.stderr.write(e.message);
  process.stderr.write('\n');
  process.exit(1);
}
