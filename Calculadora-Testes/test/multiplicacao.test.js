const multiplica = require('../src/javascript/multiplicacao')

test('A multiplicação de 10 * 20 é igual a: 200', () => {
    expect(multiplica(10,20)).toBe(200);
});

test('A multiplicação de -5 * 7,50 é igual a: 37,5', () => {
    expect(multiplica(-5,7.50)).toBe(-37.5);
});

test('A multiplicação de 0 * 255 é igual a: 0', () => {
    expect(multiplica(0,255)).toBe(0);
});