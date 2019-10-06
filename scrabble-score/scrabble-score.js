const SCORETABLE = [
  ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 1],
  ['D', 'G', 2],
  ['B', 'C', 'M', 'P', 3],
  ['F', 'H', 'V', 'W', 'Y', 4],
  ['K', 5],
  ['J', 'X', 8],
  ['Q', 'Z', 10]
];

export const score = (word) => {
  return [...word.toUpperCase()].reduce((sumScore, letter) => {
    SCORETABLE.forEach(letterScore => letterScore.includes(letter) ?
      sumScore += letterScore[letterScore.length - 1] :
      sumScore);
    return sumScore;
  }, 0);
};