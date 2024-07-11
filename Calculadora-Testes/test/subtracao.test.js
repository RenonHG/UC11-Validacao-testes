const subtrai = require('../src/javascript/subtracao')

test('A subtração de 10 - 20 é igual a: -10', () => {
    expect(subtrai(10,20)).toBe(-10);
});

test('A subtração de (-5) - (7,50) é igual a: -12,5', () => {
    expect(subtrai(-5,7.50)).toBe(-12.5);
});

test('A subtração de 0 - 255 é igual a: -255', () => {
    expect(subtrai(0,255)).toBe(-255);
});