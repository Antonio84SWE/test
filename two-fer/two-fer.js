 export function twoFer(name) {
    if(name === undefined){
       return "One for you, one for me.";
    }
    if(typeof name !== 'string' || name.match(/[^A-Z]/gi)){
      throw new Error('Invalid input data')
    }
    return `One for ${name}, one for me.`
 }
