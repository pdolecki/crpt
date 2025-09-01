import { DecimalFormat } from './decimal-format';
import { describe, it, expect } from 'vitest';

describe('DecimalFormat Pipe', () => {
  const pipe = new DecimalFormat();

  it('should return "0" for 0', () => {
    expect(pipe.transform(0)).toBe('0');
  });

  it('should format normal numbers using toPrecision(2)', () => {
    expect(pipe.transform(123.456)).toBe('123.5');
    expect(pipe.transform(9.99)).toBe('10');
  });

  it('should format values between 0 and 1 with (leading zero count)', () => {
    expect(pipe.transform(0.000123)).toBe('0.(3)12');
    expect(pipe.transform(0.00123)).toBe('0.(2)12');
    expect(pipe.transform(0.01)).toBe('0.(1)1');
    expect(pipe.transform(0.1)).toBe('0.1');
  });

  it('should handle negative numbers correctly', () => {
    expect(pipe.transform(-0.000123)).toBe('-0.(3)12');
    expect(pipe.transform(-0.01)).toBe('-0.(1)1');
    expect(pipe.transform(-5.55)).toBe('-5.5');
  });

  it('should handle values like up to 10 decimal places', () => {
    expect(pipe.transform(0.0000001)).toBe('0.(6)1');
    expect(pipe.transform(0.0000000001)).toBe('0.(9)1');
  });

  it('should format numbers between 1 and 999.9 with max one decimal', () => {
    expect(pipe.transform(1)).toBe('1');
    expect(pipe.transform(1.25)).toBe('1.3');
    expect(pipe.transform(123.456)).toBe('123.5');
    expect(pipe.transform(999.9)).toBe('999.9');
    expect(pipe.transform(999.99)).toBe('1000');
  });

  it('should format numbers >= 1000 as integers with no decimal places', () => {
    expect(pipe.transform(1000)).toBe('1000');
    expect(pipe.transform(1234.56)).toBe('1235');
    expect(pipe.transform(9999.99)).toBe('10000');
  });

  it('should format negative numbers in the same way with proper sign', () => {
    expect(pipe.transform(-1)).toBe('-1');
    expect(pipe.transform(-12.34)).toBe('-12.3');
    expect(pipe.transform(-999.99)).toBe('-1000');
    expect(pipe.transform(-1000)).toBe('-1000');
    expect(pipe.transform(-123456)).toBe('-123456');
  });
});
