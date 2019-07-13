export const validate = (number) => {
  if(typeof number  !== 'number'){
    throw new Error('You did not typed in a number!')
  }
    let result = [...number+'']
    .map(n => +n)
    .reduce((sum, digit) => sum + Math.pow(digit, [...number+''].length), 0);
    return result === number?true:false
};
