const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let stats = {};

  for(let domain of domains) {
    domain = domain.split('.').reverse().map((a) => '.' + a);
    for(let i = 0; i < domain.length; i++) {
      if(i > 0) {
        domain[i] = domain[i - 1] + domain[i];
      }
      if(stats[domain[i]]) {
        stats[domain[i]]++;
      } else {
        stats[domain[i]] = 1;
      }
    }
  }

return stats;

}

module.exports = {
  getDNSStats
};
