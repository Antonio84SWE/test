const resistMnemonics = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
export const value = (colorCodes) => {
  return +(colorCodes.reduce((sum, color) => 
    `${sum}${resistMnemonics.indexOf(color)}`,0));
};
// "" forces integers into string to concatenate them
// + trims the leading zero after the concatenation 