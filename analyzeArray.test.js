const analyzeArray = require('./analyzeArray')

test('average shoulb be close to 5', () => {
  expect(analyzeArray([12, 0, 6, 2]).average).toBeCloseTo(5)
})

test('min shoulb be 0', () => {
  expect(analyzeArray([12, 0, 6, 4]).min).toEqual(0)
})

test('max shoulb be 12', () => {
  expect(analyzeArray([12, 0, 6, 4]).max).toEqual(12)
})

test('length shoulb be 4', () => {
  expect(analyzeArray([12, 0, 6, 4]).length).toEqual(4)
})