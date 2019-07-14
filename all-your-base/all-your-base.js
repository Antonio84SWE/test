//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const pow = (base, i) => Math.pow(base, i);
export const convert = (number, base, newBase) => {
  const result = [];
  number.find((n) => {
    if (n === undefined || n < 0 || n >= base || (n === 0 && number.length > 1)) {
      throw new Error('Input has wrong format');
    } 
    if(n === 0 && number.length === 1){
      result.push(n);
    }
  });

  let inTenBase = number.reverse().reduce((sum, integer, index) => {
    return sum + integer * pow(base, index);
  }, 0)

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