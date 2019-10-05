//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (word) => {
  const SCORETABLE = [
    ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 1],
    ['D', 'G', 2],
    ['B', 'C', 'M', 'P', 3],
    ['F', 'H', 'V', 'W', 'Y', 4],
    ['K', 5],
    ['J', 'K', 8],
    ['Q', 'Z', 10]
  ];
  const letters = [...word.toUpperCase()];
  let result = letters.reduce((sum, l) => {
    SCORETABLE.forEach(lScore => {
      if (lScore.includes(l)) {
        sum = sum + lScore[lScore.length - 1];
      }
    });
    return sum;
  }, 0);
  return result;
};