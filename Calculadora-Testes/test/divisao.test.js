const divide = require('../src/javascript/divisao')

test('A divisão de 10 / 20 é igual a: 0,5', () => {
    expect(divide(10,20)).toBe(0.5);
});

test('A divisão de -5 / 7,50 é igual a: 0,6666666666666666', () => {
    expect(divide(-5,7.50)).toBe(-0.6666666666666666);
});

test('A divisão de 0 / 255 é igual a: 0', () => {
    expect(divide(0,255)).toBe(0);
});