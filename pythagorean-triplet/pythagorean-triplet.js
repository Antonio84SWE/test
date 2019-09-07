export class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  sum() {
    return this.a + this.b + this.c;
  }

  product() {
    return this.a * this.b * this.c;
  }

  isPythagorean() {
    return this.a ** 2 + this.b ** 2 === this.c ** 2 ?
      true :
      false
  }

  static where(operator) {
    const max = operator.maxFactor || 100;
    const min = operator.minFactor || 1;
    const sum = operator.sum;
    const triplets = [];
    const maxB = Math.ceil(Math.sqrt(max ** 2 - min ** 2));

    for (let a = min; a < maxB; a++) {
      for (let b = a; b <= maxB; b++) {
        for (let c = b; c <= max; c++) {
          let triNumbers = new Triplet(a, b, c);
          if (triNumbers.isPythagorean() && (!sum || sum === triNumbers.sum())) {
            triplets.push(triNumbers);
          }
        }
      }
    }
    return triplets
  }
}