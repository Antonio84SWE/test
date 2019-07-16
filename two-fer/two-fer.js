 export function twoFer(name = 'you') {
    if (typeof name !== 'string' || name.match(/[^A-Z]/gi)) {
       throw new Error('Invalid input data');
    }
    return `One for ${name}, one for me.`;
 }