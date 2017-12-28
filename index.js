const assert = require('assert');
const color = require('onecolor');

const assertCount = count =>
  assert(count > 0, `Count must be greater than 0; ${count} was provided`);
const assertColor = (parsed, original) =>
  assert(parsed, `The provided color, '${original}', was not parseable`);

module.exports = (color1, color2, count = 6) => {
  assertCount(count);
  const one = color(color1),
    two = color(color2);
  assertColor(one, color1);
  assertColor(two, color2);
  const rDelta = (two.red() - one.red()) / (count + 1),
    gDelta = (two.green() - one.green()) / (count + 1),
    bDelta = (two.blue() - one.blue()) / (count + 1),
    aDelta = (two.alpha() - one.alpha()) / (count + 1);
  const steps = [];
  for (let i = 1; i <= count; i++) {
    steps.push(
      one
        .red(rDelta * i, true)
        .green(gDelta * i, true)
        .blue(bDelta * i, true)
        .alpha(aDelta * i, true)
    );
  }
  const hasAlpha = steps.some(step => step.alpha() !== 1);
  return steps.map(step => (hasAlpha ? step.cssa() : step.css()));
};
