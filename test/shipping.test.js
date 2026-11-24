const { test } = require('node:test');
const assert = require('node:assert');
const { shipping } = require('../src/shipping');

test('1 kg costs 200', () => {
  assert.strictEqual(shipping(1), 200);
});

test('5 kg costs 350', () => {
  assert.strictEqual(shipping(5), 350);
});

test('5.5 kg costs 500', () => {
  assert.strictEqual(shipping(5.5), 500);
});

test('10 kg costs 500', () => {
  assert.strictEqual(shipping(10), 500);
});

test('20 kg costs 1500', () => {
  assert.strictEqual(shipping(20), 1500);
});

test('zero or negative weight is rejected', () => {
  assert.throws(() => shipping(-2), RangeError);
});
