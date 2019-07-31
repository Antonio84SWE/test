export const steps = (n, steps = 0) => {
  if (typeof n != 'number' ||n <= 0) {
    throw new Error('Only positive numbers are allowed');
  }
  while (n !== 1) {
    n % 2 === 0 ? n /= 2 : n = 3 * n + 1;
    steps++;
  }
  return steps;
};
