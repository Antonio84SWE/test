export const encode = (code) => {
  if (code === '') {
    return code;
  }
  let counter = 1;
  return [...code].reduce((solveCode, char, i) => {
    char === [...code][i + 1] ?
      counter++ :
      counter === 1 ?
      solveCode += char :
      (solveCode += '' + counter + char, counter = 1);
    return solveCode;
  }, '')
}

export const decode = (code) => {
  if (code === '') {
    return code;
  }
  let repNumber = 0;
  return [...code].reduce((encodeStr, char) => {
    /\d/.test(char) === true ?
      repNumber += char :
      repNumber != 0 ?
      (encodeStr += char.repeat(repNumber), repNumber = 0) :
      encodeStr += char;
    return encodeStr;
  }, '')
}
