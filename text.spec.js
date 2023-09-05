const letterService = require('./index');

describe('letterService', () => {
  test('should transform word when word have inpar lenght', () => {
    const result = letterService.transformWord('hello')
    expect(result).toBe('*hel*lo');
  });

  test('should transform word when word have par lenght', () => {
    const result = letterService.transformWord('casa')
    expect(result).toBe('*ca*sa');
  });
})

