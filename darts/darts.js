export const solve = (x, y) => {
  const d = Math.sqrt(x * x + y * y);
  return (
    (d <= 1) ? 10 :
    (d <= 5) ? 5 :
    (d <= 10) ? 1 : 0)
}