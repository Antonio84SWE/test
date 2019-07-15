const pow = (base, i) => Math.pow(base, i);
const baseControl = (base, baseName) => {
  if (base <= 1 || Number.isInteger(base) === false || base === undefined) {
    if (baseName === 'oldBase') {
      throw new Error('Wrong input base');
    }
    if (baseName === 'newBase') {
      throw new Error('Wrong output base');
    }
  }
}
const tenBaseConv = (number, base) => {
  return number.reverse().reduce((sum, integer, index) => {
    return sum + integer * pow(base, index);
  }, 0)
}
export const convert = (number, oldBase, newBase) => {
  const result = [];
  if ((number[0] === undefined && oldBase > 1) || (number[0] === 0 && number.length > 1)) {
    throw new Error('Input has wrong format');
  }
  number.find(n => {
    if (n < 0 || (n >= oldBase && oldBase > 1 || )) {
      throw new Error('Input has wrong format');
    }
  })
  baseControl(oldBase, Object.keys({
    oldBase
  })[0]);
  baseControl(newBase, Object.keys({
    newBase
  })[0]);
  if (number[0] === 0 && number.length === 1) {
    result.push(0);
  }
  let inTenBase = tenBaseConv(number, oldBase);
  let j = 0
  let denominator = (j) => pow(newBase, j);
  while (inTenBase / denominator(j) >= 1) j += 1;
  j -= 1;
  while (j >= 0) {
    result.push((inTenBase - inTenBase % denominator(j)) / denominator(j))
    inTenBase %= pow(newBase, j);
    j -= 1;
  }
  return result
};