const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");
  if(arr.length === 0) return [];

  let newArr = [ ...arr ];

  for(let i = 0; i < newArr.length; i++) {
    if(typeof(newArr[i]) !== 'number') {
      switch(newArr[i]) {
        case '--double-next':
          if(i !== newArr.length - 1) newArr.splice(i + 1, 0, newArr[i + 1]);
          newArr.splice(i, 1);
          break;
        case '--double-prev':
          if(i !== 0) {
            newArr.splice(i, 0, newArr[i - 1]);
            i = i + 1;
          }
          newArr.splice(i, 1);
          break;
        case '--discard-next':
          if(i !== newArr.length - 1) {
            if(i !== newArr.length - 2 
              && (newArr[i + 2] === '--double-prev' 
              || newArr[i + 2] === '--discard-prev')) {
              newArr.splice(i + 1, 2);
            } else {
              newArr.splice(i + 1, 1);
            }
          }
          newArr.splice(i, 1);
          break;
        case '--discard-prev':
          if(i !== 0) {
            newArr.splice(i - 1, 1);
            i--;
          }
          newArr.splice(i, 1);
          i--;
          break;
      }
    }
  }

  return newArr;
}

module.exports = {
  transform
};
