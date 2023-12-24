const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str = str.split('');

  let newStr = [];
  let counter;

  for(let char of str) {
    if(newStr[newStr.length - 1] === char) {
      counter++;
      newStr.splice(-2, 1, `${counter}`);
    } else {
      counter = 1;
      newStr.push(`${counter}`);
      newStr.push(char);
    }
  }

  return newStr.filter((char) => char !== '1').join('');
}

module.exports = {
  encodeLine
};
