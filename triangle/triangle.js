export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {
    const a = this.a;
    const b = this.b;
    const c = this.c;
    if (a >= b + c || b >= c + a || c >= a + b || a <= 0 || b <= 0 || c <= 0) {
      throw new Error()
    }
    return a !== b || b !== c ? (b === c || c === a || a === b ? 'isosceles' : 'scalene') : 'equilateral';
  }
}