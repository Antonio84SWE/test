export const transform = (data) => {
  const newFormat = {};
  const newValues = Object.keys(data)

  newValues.forEach(oldKey => {
    data[oldKey].forEach(letter => {
      newFormat[letter.toLowerCase()] = parseInt(oldKey)
    });
  });
  return newFormat;
}