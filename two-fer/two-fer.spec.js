import { twoFer } from './two-fer'

describe('twoFer()', () => {
  test('return error if a non-string is used as argument', () => {
    const input = true
    expect(() => twoFer(input)).toThrow(new Error('Invalid input data'));
  })
  test('return error if string with non-alphabetic character is used as argument', () => {
    expect(() => twoFer('Urban2')).toThrow(new Error('Invalid input data'));
    expect(() => twoFer('Bru465no')).toThrow(new Error('Invalid input data'));
    expect(() => twoFer('01&Storbulle')).toThrow(new Error('Invalid input data'));
  })
  test('no name given', () => {
    expect(twoFer()).toEqual("One for you, one for me.")
  })

  test('a name given', () => {
    expect(twoFer("Alice")).toEqual("One for Alice, one for me.")
  })

  test('another name given', () => {
    expect(twoFer("Bob")).toEqual("One for Bob, one for me.")
  })
})
