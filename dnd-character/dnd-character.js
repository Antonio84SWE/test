//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (num) => {
  if (num < 3) {
    throw new Error('Ability scores must be at least 3');
  }
  if (num > 18) {
    throw new Error('Ability scores can be at most 18');
  }
  return Math.floor((num - 10) / 2);
};

export class Character {
  static rollAbility() {
    const diceResults = [];
    for (let i = 0; i < 4; i++) {
      diceResults.push(Math.floor(Math.random() * 6 + 1));
    }
    diceResults
      .sort()
      .shift()
    return diceResults.reduce((sum, n) => sum + n, 0);
  }

  get strength() {
    return this.rollAbility;
  }

  get dexterity() {
    return this.rollAbility;
  }

  get constitution() {
    return this.rollAbility;
  }

  get intelligence() {
    return this.rollAbility;
  }

  get wisdom() {
    return this.rollAbility;
  }

  get charisma() {
    return this.rollAbility;
  }

  get hitpoints() {
    return abilityModifier(this.constitution);
  }
}