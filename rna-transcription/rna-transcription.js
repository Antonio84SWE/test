const TRANSCRIPTION = new Map([['A', 'U'], ['T', 'A'], ['C', 'G'], ['G', 'C']])
export const toRna = (DNA) => {
  if (/[^ATCG]/gi.test(DNA)) {
    throw new Error('This DNA-sequence includes non-existing DNA-bases!');
  }
  return DNA.split('').reduce((RNAcode, DNAbase) => RNAcode += TRANSCRIPTION.get(DNAbase), '');
}