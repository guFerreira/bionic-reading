const letterService = require('./wordService');

describe('transformWord', () => {
  test('should transform word when word have inpar lenght', () => {
    const result = letterService.transformWord('hello')
    expect(result).toBe('*hel*lo');
  });

  test('should transform word when word have par lenght', () => {
    const result = letterService.transformWord('casa')
    expect(result).toBe('*ca*sa');
  });

  test('should return error when word contains blank space', () => {
    const result = () => {
      letterService.transformWord('Uma frase')
    }
    expect(result).toThrow('A palavra é uma frase');
  });
})

describe('transformPhrase', () => {
  test('should transform word when word have inpar lenght', () => {
    const result = letterService.transformPhrase('Olá, eu sou o Gustavo!')
    expect(result).toBe('*Ol*á, *e*u *so*u o *Gust*avo!');
  });

})
