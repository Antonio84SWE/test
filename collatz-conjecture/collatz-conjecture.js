export const steps = (n) => {
  if (n <= 0) {
    throw new Error('Only positive numbers are allowed');
  }
  let steps = 0;
  while (n !== 1) {
    n % 2 === 0 ? n /= 2 : n = 3 * n + 1;
    steps++;
  }
  return steps;
};
