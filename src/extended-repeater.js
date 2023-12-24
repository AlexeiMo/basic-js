const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newStr = '';

  options.repeatTimes = options.repeatTimes === undefined
    ? 1
    : options.repeatTimes;

    options.additionRepeatTimes = options.additionRepeatTimes === undefined
    ? 1
    : options.additionRepeatTimes;

  options.separator = options.separator === undefined
    ? '+'
    : options.separator;
  options.additionSeparator = options.additionSeparator === undefined
    ? '|'
    : options.additionSeparator;

  for(let i = 0; i < options.repeatTimes; i++) {
    newStr += str;
    let addition = '';
    if(options.addition !== undefined) {
      for(let j = 0; j < options.additionRepeatTimes; j++) {
        addition += options.addition;
        if(options.additionSeparator && j !== options.additionRepeatTimes - 1) {
          addition += options.additionSeparator;
        }
      }
      newStr += addition;
    }
    if(options.separator && i !== options.repeatTimes - 1) {
      newStr += options.separator;
    }
  }

  return newStr;
}

module.exports = {
  repeater
};
