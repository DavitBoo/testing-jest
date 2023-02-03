const capitalize = require('./capitalize');

test('first letter should become capital letter', () => {
    expect(capitalize('capitalize')).toMatch(/^[A-Z]/);
  });

test('just first letter should be a capital letter', () => {
expect(capitalize('cAPItalize')).toBe('Capitalize');
});

test('same character at the beggining', () => {
    expect(capitalize('capitalize')).toMatch(/^C/)
  })
