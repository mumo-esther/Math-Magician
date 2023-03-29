import calculate from './calculate';

describe('calculate', () => {
  it('should return an empty object when AC button is clicked', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should add a number to next when a number button is clicked', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, '4');
    expect(result).toEqual({ total: '5', next: '34', operation: '+' });
  });

  it('should update the operation when an operator button is clicked', () => {
    const result = calculate({ total: '5', next: '3', operation: '-' }, '+');
    expect(result).toEqual({ total: '2', next: null, operation: '+' });
  });

  it('should perform the operation when the equal button is clicked', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, '=');
    expect(result).toEqual({ total: '8', next: null, operation: null });
  });

  it('should toggle the sign of next or total when +/- button is clicked', () => {
    const result1 = calculate({ total: '5', next: '3', operation: '+' }, '+/-');
    expect(result1).toEqual({ total: '5', next: '-3', operation: '+' });

    const result2 = calculate(
      { total: null, next: '3', operation: null },
      '+/-',
    );
    expect(result2).toEqual({ total: null, next: '-3', operation: null });
  });

  it('should ignore an operator button if no numbers have been entered yet', () => {
    const result = calculate({ total: null, next: null, operation: null }, '+');
    expect(result).toEqual({});
  });

  it('should perform the previous operation when a new operator button is clicked', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, '-');
    expect(result).toEqual({ total: '8', next: null, operation: '-' });
  });

  it('should perform the previous operation with new numbers when a new operator button is clicked', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, '+');
    expect(result).toEqual({ total: '8', next: null, operation: '+' });
  });

  it('should ignore the previous operation when no new numbers have been entered and a new operator button is clicked', () => {
    const result = calculate({ total: '5', next: null, operation: '+' }, '-');
    expect(result).toEqual({ total: '5', next: null, operation: '-' });
  });
});
