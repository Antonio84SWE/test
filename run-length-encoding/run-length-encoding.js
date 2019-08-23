export const encode = (code) => {
  return code === '' ? code :
    code.match(/(.)\1*/gi)
    .reduce((acc, curr) => curr.length === 1 ? acc += curr[0] :
      acc += '' + curr.length + curr[0], '')
}

export const decode = (code) => {
  return code === '' ? code :
    code.match(/(\d+)?./gi)
    .reduce((acc, curr) => curr.length === 1 ? acc += curr.slice(-1) :
    acc += curr.slice(-1).repeat(curr.slice(0,-1)), '')
}