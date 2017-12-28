const colorSteps = require('./index.js');

describe('color-steps utility', () => {
  it('should match base calucation with white and black', () => {
    expect(colorSteps('black', 'white')).toMatchSnapshot();
  });
  it('should support alpha', () => {
    expect(
      colorSteps('rgba(0, 0%, 0%, 0)', 'rgba(0, 0%, 0%, 1)', 1)
    ).toMatchSnapshot();
  });
  it('should support going from light to dark', () => {
    expect(colorSteps('white', 'black')).toMatchSnapshot();
  });
  it('should throw errors on invalid input', () => {
    expect(() => {
      colorSteps('foo', 'bar');
    }).toThrow(/foo/);
    expect(() => {
      colorSteps('red', 'bar');
    }).toThrow(/bar/);
    expect(() => {
      colorSteps('red', 'blue', -2);
    }).toThrow(/-2/);
  });
});
