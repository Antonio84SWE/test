export const encode = (code) => {
  if (code === '') {
    return code;
  }
  let counter = 1;
  const CODESPLIT = code.split('');
  return CODESPLIT.reduce((sum, letter, i) => {
    letter === CODESPLIT[i + 1] ?
      counter++ :
      counter === 1 ?
      sum += letter :
      (sum += '' + counter + letter, counter = 1);
    return sum;
  }, '')
}