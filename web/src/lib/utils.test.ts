import { describe, it, expect } from 'vitest';
import { capitalize, formatCurrency, truncate } from './utils';

describe('capitalize', () => {
  it('should capitalize the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('should handle empty strings', () => {
    expect(capitalize('')).toBe('');
  });

  it('should not change already capitalized strings', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });
});

describe('formatCurrency', () => {
  it('should format numbers as USD currency', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
  });

  it('should handle zero', () => {
    expect(formatCurrency(0)).toBe('$0.00');
  });

  it('should handle negative numbers', () => {
    expect(formatCurrency(-50.99)).toBe('-$50.99');
  });
});

describe('truncate', () => {
  it('should truncate strings longer than maxLength', () => {
    expect(truncate('Hello, World!', 5)).toBe('Hello...');
  });

  it('should not truncate strings shorter than maxLength', () => {
    expect(truncate('Hi', 10)).toBe('Hi');
  });

  it('should handle exact length', () => {
    expect(truncate('Hello', 5)).toBe('Hello');
  });
});
