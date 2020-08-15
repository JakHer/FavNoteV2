const addTwo = (a, b) => a + b;

it('adds two elements', () => {
  expect(addTwo(1, 2)).toBe(3);
});

const shoppingList = [
  `cheetos`,
  `redbull`,
  `pringels`,
  `somersby`,
  `apple`,
];

it(`contains healthy food`, () => {
  expect(shoppingList).toContain(`apple`);
});

const priceCount = (price) => price + 100;

it(`is bigger than 100`, () => {
  expect(priceCount(1)).toBeGreaterThan(100);
});

it(`priceCount toBeLessThanOrEqual`, () => {
  expect(priceCount(99)).toBeLessThanOrEqual(200);
});
