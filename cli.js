#!/usr/bin/env node

try {
  const [color1, color2, count] = process.argv.slice(2),
    steps = require('./index')(color1, color2, Number(count) || undefined);
  process.stdout.write(steps.join('\n'));
  process.stdout.write('\n');
} catch (e) {
  process.stderr.write(e.message);
  process.stderr.write('\n');
  process.exit(1);
}
