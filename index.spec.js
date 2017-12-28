const colorSteps = require('./index.js');

describe('color-steps utility', () => {
  it('should match base calucation with white and black', () => {
    expect(colorSteps('black', 'white')).toMatchSnapshot();
  });
});
