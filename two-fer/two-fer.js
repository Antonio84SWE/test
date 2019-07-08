 function twoFer(name) {
    let msg ="";
    name === undefined? msg = "One for you, one for me.":
    msg = `One for ${name}, one for me.`;
    return msg;
 }
module.exports = {twoFer}