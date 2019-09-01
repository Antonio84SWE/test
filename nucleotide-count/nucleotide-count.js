export class NucleotideCounts {
  static parse(DNA) {
    if (/[^ACTG]/g.test(DNA)) {
      throw new Error('Invalid nucleotide in strand')
    }

    const COUNTER = DNA.split('').reduce((sum, base) => ({
      ...sum,
      [base]: sum[base] += 1
    }), {A: 0, C: 0, G: 0, T: 0});

    return Object.values(COUNTER).join(' ');
  }
}