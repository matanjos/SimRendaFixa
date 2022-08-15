const  impostoCalc = require('../calculaImposto');

test('Imposto de investimento menor que 6 meses deve ser 22,5%', () => {
    expect(impostoCalc(100,6)).toBe(22.5);
  });

  test('Imposto de investimento entre 6 e 12 meses deve ser 20%', () => {
    expect(impostoCalc(100,12)).toBe(20.0);
  });

  test('Imposto de investimento entre 12 e 24 meses deve ser 17,5%', () => {
    expect(impostoCalc(100,18)).toBe(17.5);
  });

  test('Imposto de investimento maior que 24 meses deve ser 15%', () => {
    expect(impostoCalc(100,38)).toBe(15.0);
  });