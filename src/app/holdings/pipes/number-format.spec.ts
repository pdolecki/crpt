import { NumberFormat } from './number-format';
import { describe, it, expect } from 'vitest';

describe('NumberFormat Pipe', () => {
  const pipe = new NumberFormat();

  it('should format values >= 1,000,000 as millions with "m"', () => {
    expect(pipe.transform(1000000)).toBe('1m');
    expect(pipe.transform(2500000)).toBe('2.5m');
    expect(pipe.transform(72000000)).toBe('72m');
  });

  it('should format values >= 1,000 as thousands with "k"', () => {
    expect(pipe.transform(1000)).toBe('1k');
    expect(pipe.transform(5400)).toBe('5.4k');
    expect(pipe.transform(999999)).toBe('1000k');
  });

  it('should format values < 1000 as rounded integers', () => {
    expect(pipe.transform(999)).toBe('999');
    expect(pipe.transform(101.8)).toBe('102');
    expect(pipe.transform(0)).toBe('0');
  });

  it('should handle decimals correctly', () => {
    expect(pipe.transform(1234.56)).toBe('1.2k');
    expect(pipe.transform(1234567.89)).toBe('1.2m');
  });
});
