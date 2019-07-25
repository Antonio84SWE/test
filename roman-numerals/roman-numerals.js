const romanSign = [
  ['I', 'X', 'C', 'M'],
  ['V', 'L', 'D']
];

const romanNumber = (n, i) => {
  return n < 4 ? romanSign[0][i].repeat(n) :
    n === 4 ? romanSign[0][i] + romanSign[1][i] :
    n >= 5 && n <= 8 ? romanSign[1][i] + romanSign[0][i].repeat(n - 5) :
    romanSign[0][i] + romanSign[0][i + 1];
}

export const toRoman = (number) => {
  return [...number + '']
    .map(n => +n)
    .reverse()
    .reduce((sum, number, index) => romanNumber(number, index) + sum, '')
};