const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
  if(!(date instanceof Date)
    || typeof(date.getMonth) !== 'function'
  ) throw new Error('Invalid date!');


  const month = (date.getMonth() + 1) % 12;
  
  switch(Math.floor(month / 3)) {
    case 0:
      return 'winter';
    case 1:
      return 'spring';
    case 2:
      return 'summer';
    case 3:
      return 'autumn';
  }
}

module.exports = {
  getSeason
};
