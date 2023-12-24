const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if(n % 10 === n) return n;

  n = `${n}`.split('');
  console.log(n);
  let numArr = [];

  for(let i = 0; i < n.length; i++) {
    let nCopy = [...n];
    nCopy.splice(i, 1);
    numArr.push(+nCopy.join(''));
  }

  return Math.max(...numArr);
}

module.exports = {
  deleteDigit
};
