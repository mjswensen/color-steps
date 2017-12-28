const color = require('onecolor');

module.exports = (color1, color2, count = 6) => {
  const one = color(color1),
    two = color(color2),
    rDelta = (two.red() - one.red()) / (count + 1),
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
