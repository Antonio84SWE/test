export const compute = (DNA1, DNA2) => {
  const size1 = DNA1.length;
  const size2 = DNA2.length;
  if (size1 === 0 && size2 !== 0) {
    throw new Error('left strand must not be empty')
  }
  if (size1 !== 0 && size2 === 0) {
    throw new Error('right strand must not be empty')
  }
  if (size1 !== size2) {
    throw new Error('left and right strands must be of equal length')
  }
  if (size1 === 0 && size2 === 0 || DNA1 === DNA2) {
    return 0;
  } else {
    return [...DNA1].reduce((hammingNumber, base1, index) => {
      if (base1 !== [...DNA2][index]) {
        hammingNumber++;
      }
      return hammingNumber;
    }, 0)
  }
}