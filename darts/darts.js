export const solve = (x, y) => {
  const d = Math.sqrt(x*x + y*y);
  return (
    (d <= 10 && d > 5) ? 1 :
    (d <= 5 && d > 1) ? 5 :
    (d <= 1) ? 10 : 0)
}