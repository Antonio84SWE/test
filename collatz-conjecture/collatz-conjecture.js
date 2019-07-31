export const steps = (number) => {
  if (number <= 0) {
    throw new Error('Only positive numbers are allowed');
  }
  return number === 1 ? 0 : stepCount(number);
};

const stepCount = n => {
  let steps = 0;
  while (n !== 1) {
    n % 2 === 0 ? n /= 2 : n = 3 * n + 1;
    steps++;
  }
  return steps;
}