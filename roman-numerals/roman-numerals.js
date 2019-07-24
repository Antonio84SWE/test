const romanSign = [
  ['I', 'X', 'C', 'M'],
  ['V', 'L', 'D']
];

const romanNumber = (n, index) => {
  if (n < 4) {
    return romanSign[0][index].repeat(n);
  }
  if (n === 4) {
    return romanSign[0][index] + romanSign[1][index];
  }
  if (n >= 5 && n <= 8) {
    return romanSign[1][index] + romanSign[0][index].repeat(n - 5);
  }
  return romanSign[0][index] + romanSign[0][index + 1];
}

export const toRoman = (number) => {
  return [...number + '']
    .map(n => +n)
    .reverse()
    .reduce((sum, number, index) => {
      return romanNumber(number, index) + sum;
    }, '')
};