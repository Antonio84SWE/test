import { toRna } from './rna-transcription'

describe('Transcription', () => {
  test('Throw error when DNA-sequence include non-DNA-bases', () => {
    expect(() => toRna('XGTCAA')).toThrow(new Error('This DNA-sequence includes non-existing DNA-bases!'));
    expect(() => toRna('GTCAWEAÖÄÖ13#')).toThrow(new Error('This DNA-sequence includes non-existing DNA-bases!'));
  });

  test('empty rna sequence', () => {
    expect(toRna('')).toEqual('');
  });

  test('transcribes cytosine to guanine', () => {
    expect(toRna('C')).toEqual('G');
  });

  test('transcribes guanine to cytosine', () => {
    expect(toRna('G')).toEqual('C');
  });

  test('transcribes thymine to adenine', () => {
    expect(toRna('T')).toEqual('A');
  });

  test('transcribes adenine to uracil', () => {
    expect(toRna('A')).toEqual('U');
  });

  test('transcribes all dna nucleotides to their rna complements', () => {
    expect(toRna('ACGTGGTCTTAA')).toEqual('UGCACCAGAAUU');
  });
});