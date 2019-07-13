//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = (number) => {
  if(typeof number  !== 'number'){
    throw new Error('You did not typed in a number')
  }
    let result = [...number+'']
    .map(n => +n)
    .reduce((sum, digit) => sum + Math.pow(digit, [...number+''].length));
    return result === number?true:false
};
