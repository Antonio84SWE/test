export const solve = (x, y) => {
  const d = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  return (
    (d <= 10 && d > 5) ? 1 :
    (d <= 5 && d > 1) ? 5 :
    (d <= 1) ? 10 : 0)
}