//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//(number[0] === undefined && base <= 1)||
const pow = (base, i) => Math.pow(base, i);
const baseCtrl = (base, baseName) => {
  if (base <= 1 || Number.isInteger(base) === false || base === undefined) {
    if (baseName === 'oldBase') {
      throw new Error('Wrong input base');
    }
    if (baseName === 'newBase') {
      throw new Error('Wrong output base');
    }
  }
}
function tenBaseConv(number, base) {
  return number.reverse().reduce((sum, integer, index) => {
    return sum + integer * pow(base, index);
  }, 0)
}

export const convert = (number, oldBase, newBase) => {
  const result = [];
  if ((number[0] === undefined && oldBase > 1) || (number[0] === 0 && number.length > 1)) {
    throw new Error('Input has wrong format');
  }
  baseCtrl(oldBase, Object.keys({
    oldBase
  })[0]);
  baseCtrl(newBase, Object.keys({
    newBase
  })[0]);
  number.find(n => {
    if (n < 0 || (n >= oldBase && oldBase > 1)) {
      throw new Error('Input has wrong format');
    }
    if (n === 0 && number.length === 1) {
      result.push(n);
    }
  });

  let inTenBase = tenBaseConv(number, oldBase)
  let j = 0
  while (inTenBase / pow(newBase, j) >= 1) j += 1;
  j -= 1;
  while (j >= 0) {
    result.push((inTenBase - inTenBase % pow(newBase, j)) / pow(newBase, j))
    inTenBase %= pow(newBase, j);
    j -= 1;
  }
  return result
};