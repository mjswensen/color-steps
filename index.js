const assert = require('assert');
const color = require('onecolor');
const {
  logToLin,
  linToLog,
} = require('srgb-logarithmic-and-linear-colour-conversion');

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

  const r1linear = logToLin(one.red() * 255),
    r2linear = logToLin(two.red() * 255),
    g1linear = logToLin(one.green() * 255),
    g2linear = logToLin(two.green() * 255),
    b1linear = logToLin(one.blue() * 255),
    b2linear = logToLin(two.blue() * 255);

  const rDelta = (r2linear - r1linear) / (count + 1),
    gDelta = (g2linear - g1linear) / (count + 1),
    bDelta = (b2linear - b1linear) / (count + 1),
    aDelta = (two.alpha() - one.alpha()) / (count + 1);

  const steps = [];
  for (let i = 1; i <= count; i++) {
    steps.push(
      new color.RGB(
        linToLog(r1linear + rDelta * i) / 255,
        linToLog(g1linear + gDelta * i) / 255,
        linToLog(b1linear + bDelta * i) / 255,
        one.alpha() + aDelta * i,
      )
    );
  }
  const hasAlpha = steps.some(step => step.alpha() !== 1);
  return steps.map(step => (hasAlpha ? step.cssa() : step.css()));
};
