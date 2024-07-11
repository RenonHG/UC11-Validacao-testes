const soma = require('../src/javascript/soma')

test('A soma de 1 + 2 é igual a: 3', () => {
    expect(soma(1,2)).toBe(3);
});

test('A soma de (-10) + (-30) é igual a: -40', () => {
    expect(soma(-10,-30)).toBe(-40);
});

test('A soma de (-3,75) + (-257,6) é igual a: -261,35', () => {
    expect(soma(-3.75,-257.6)).toBe(-261.35);
});