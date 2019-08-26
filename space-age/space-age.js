const planetYearsConvert = new Map([
  ['mercury', 0.2408467],
  ['venus', 0.61519726],
  ['earth', 1],
  ['mars', 1.8808158],
  ['jupiter', 11.862615],
  ['saturn', 29.447498],
  ['uranus', 84.016846],
  ['neptune', 164.79132]
]);
const EARTHYEARSSEC = 31557600;
export const age = (planet, ageSec) => {
  if (planetYearsConvert.get(planet) === undefined ||  typeof ageSec !== 'number' ){
    throw new Error('Unvalid planet name or time!');
  }
  const EARTHYEARS = ageSec / EARTHYEARSSEC;
  return (EARTHYEARS / (planetYearsConvert.get(planet))).toFixed(2) * 1;
};