export const reverseString = (text) => {
  return text === '' ? '' : [...text].reverse().join('')
};
