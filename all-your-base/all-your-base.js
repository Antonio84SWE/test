//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const pow = (base, i) => Math.pow(base, i);
export const convert = (number, base, newBase) => {
  number.find((n) => {
    console.log(n);
    if (n === undefined || n < 0 || n >= base || (number[0] === 0 && number.length > 0)) {
      throw new Error('Input has wrong format');
    }
    if(number[0] === 0 && number.length === 0){
      return [0];
    }
  });
  
  let inTenBase = number.reverse().reduce((sum, integer, index) => {
    return sum + integer * pow(base, index);
  }, 0)
  
  const result = [];
  let j = 0
  while (inTenBase / pow(newBase, j) > 1) j += 1;
  j -= 1;
  while (j >= 0) {
    result.push((inTenBase - inTenBase % pow(newBase, j)) / pow(newBase, j))
    inTenBase %= pow(newBase, j);
    j -= 1;
  }
  return result
};