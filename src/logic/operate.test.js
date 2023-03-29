import operate from './operate';

describe('operate function', () => {
  it('should add two numbers', () => {
    const result = operate('2', '3', '+');
    expect(result).toBe('5');
  });

  it('should subtract two numbers', () => {
    const result = operate('5', '3', '-');
    expect(result).toBe('2');
  });

  it('should multiply two numbers', () => {
    const result = operate('2', '3', 'x');
    expect(result).toBe('6');
  });

  it('should divide two numbers', () => {
    const result = operate('6', '3', '÷');
    expect(result).toBe('2');
  });

  it('should throw an error for unknown operations', () => {
    expect(() => operate('2', '3', '*')).toThrowError("Unknown operation '*'");
  });

  it('should return "Can\'t divide by 0." for division by zero', () => {
    const result = operate('2', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it("should return \"Can't find modulo as can't divide by 0.\" for modulo by zero", () => {
    const result = operate('2', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });
});
