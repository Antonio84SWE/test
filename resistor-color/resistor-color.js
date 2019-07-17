const resistMnemonics = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
export const colorCode = (colorInput) => {
  return resistMnemonics.indexOf(colorInput);
};
export const COLORS = resistMnemonics;
