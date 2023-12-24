const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

let globalDepth = 1;
let currentDepth = 1;
class DepthCalculator {
  calculateDepth(arr) {
    for(let elem of arr) {
      if(Array.isArray(elem)) {
        currentDepth++;
        globalDepth = Math.max(globalDepth, currentDepth);
        this.calculateDepth(elem, currentDepth);
        currentDepth--;
      }
    }
    let result = globalDepth;
    if(currentDepth == 1) globalDepth = 1;
    return result;
  }
}

module.exports = {
  DepthCalculator
};
