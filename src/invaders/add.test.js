import { add } from './add.js';
import { test, expect } from '@jest/globals';

test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});
