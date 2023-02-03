const reverseString = require('./reverseString')

test('ASUS in reverse order should be SUSA', () => {
  expect(reverseString('ASUS')).toBe('SUSA')
})

test('abc123 in reverse order should be 321cba', () => {
  expect(reverseString('abc123')).toBe('321cba')
})