export const transform = (data) => {
  const newFormat = {};

  Object.entries(data)
    .forEach(([score, letters]) => letters
      .forEach(lett => newFormat[lett.toLowerCase()] = Number(score)));
  return newFormat;
}