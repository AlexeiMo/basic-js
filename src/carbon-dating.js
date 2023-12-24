const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string'|| isNaN(sampleActivity) || !sampleActivity.trim()) return false;
  if(+sampleActivity > MODERN_ACTIVITY || +sampleActivity <= 0) return false;

  const rateConstant = Math.LN2 / HALF_LIFE_PERIOD;
  const reactionRate = Math.log(MODERN_ACTIVITY / +sampleActivity);
  const age = Math.ceil(reactionRate / rateConstant);

  return age;
}

module.exports = {
  dateSample
};
