//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const romanNumber = [['I', 'X', 'C', 'M'], ['V', 'L', 'D']];

const romanCond = (n, i) => {
  console.log('n & index', n ,i)
  if(n < 4){
    console.log('roman',romanNumber[0][i].repeat(n))
    return romanNumber[0][i].repeat(n);
  }
  if(n === 4){
    console.log('roman',romanNumber[0][i] + romanNumber[1][i])
    return romanNumber[0][i] + romanNumber[1][i];
  }/*
  if(n === 5){
    return romanNumber[1][i];
  }
  if(n > 5 && n <= 8){
    return romanNumber[1][i] + romanNumber[0][i];
  }
  return romanNumber[0][i] + romanNumber[1][i];
  */
}
export const toRoman = (number) => {
  console.log([...number+''].map(n => +n));
 let result = [...number+'']
 .map(n => +n)
 .reverse()
 .reduce((sum, n, index) => {
   console.log('index',index)
   console.log('n',n)
   return sum + romanCond(n, index);
   console.log('reduce loop', sum + romanCond(n, index))
 },'')
 console.log('result', result)
 return result;
};
