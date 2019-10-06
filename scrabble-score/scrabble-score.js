const SCORETABLE = {
  'AEIOULNRST': 1,
  'DG': 2,
  'BCMP': 3,
  'FHVWY': 4,
  'K': 5,
  'JX': 8,
  'QZ': 10
}

const scoreTableProps = Object.keys(SCORETABLE);

export const score = (word) => {
  return [...word.toUpperCase()].reduce((score, letter) => {
    scoreTableProps.forEach(letterGroup => letterGroup.includes(letter) ?
      score += SCORETABLE[letterGroup] : score);
    return score;
  }, 0);
}