//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const resistMnemonics = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
export const colorCode = (colorInput) => {
  return resistMnemonics.indexOf(colorInput);
};
export const COLORS = resistMnemonics;
