//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const TRANSCRIPTION = {
  A: 'U',
  T: 'A',
  C: 'G',
  G: 'C',
}

export const toRna = (DNA) => {
  if(/[^ATCG]/gi.test(DNA)){
    throw new Error('This DNA-sequence includes non-existing DNA-bases!');
  }
  return DNA.split('').reduce((sum, base) => sum + TRANSCRIPTION[base], '');
}