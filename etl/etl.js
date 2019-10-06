export const transform = (oldFormat) => {
  const newValues = Object.keys(oldFormat)
    .map(numbStr => parseInt(numbStr));

  const newKeys = Object.values(oldFormat)
    .map(group => group.map(letter => letter.toLowerCase()));

  return newKeys.reduce((newFormat, letterGroup, i) => {
    letterGroup.forEach(letter => newFormat[letter] = newValues[i]);
    return newFormat;
  }, {})
};