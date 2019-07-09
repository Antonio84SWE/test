const codonLibrary = {
  'AUG': 'Methionine',
  'UUU': 'Phenylalanine',
  'UUC': 'Phenylalanine',
  'UUA': 'Leucine',
  'UUG': 'Leucine',
  'UCU': 'Serine',
  'UCC': 'Serine',
  'UCA': 'Serine',
  'UCG': 'Serine',
  'UAU': 'Tyrosine',
  'UAC': 'Tyrosine',
  'UGU': 'Cysteine',
  'UGC': 'Cysteine',
  'UGG': 'Tryptophan',
  'UAA': 'STOP',
  'UAG': 'STOP',
  'UGA': 'STOP',
}

export const translate = (RNA) => {
  if (RNA === undefined) {
    return [];
  }
  if (RNA.length < 3 || RNA.match(/[A,U,G,C]/gi) === null) {
    throw new TypeError('Invalid codon');
  } else {
    const codons = RNA.match(/.{1,3}/g).map(codon => codonLibrary[codon]);
    const stopIndex = codons.indexOf('STOP');
    switch (stopIndex) {
      case -1:
        return codons
      case 0:
        return [];
      default:
        codons.splice(stopIndex);
        return codons;
    }
  }
};