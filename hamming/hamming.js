//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (DNA1, DNA2) => {
  const size1 = DNA1.length;
  const size2 = DNA2.length;
  if (size1 !== size2) {
    throw new Error('left and right strands must be of equal length')
  }
  if (size1 === 0 && size2 === 0 || DNA1 === DNA2) {
    return 0;
  }
}