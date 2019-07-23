export const solve = (x, y) => {
  if(typeof x !== 'number' || typeof y !== 'number'){
    throw new Error('Both coordinates must be numbers!')
  }
  const d = Math.sqrt(x * x + y * y);
  return (
    d <= 1 ? 10 :
    d <= 5 ? 5 :
    d <= 10 ? 1 : 0)
}