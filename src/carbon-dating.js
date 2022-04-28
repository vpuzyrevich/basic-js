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
  let sampleActivityNumber = +sampleActivity;
  const k = 0.693 / HALF_LIFE_PERIOD;
  let number;
  if(typeof sampleActivity !== 'string' || isNaN(sampleActivityNumber) ||  typeof sampleActivity === 'undefined' || sampleActivityNumber > MODERN_ACTIVITY || sampleActivityNumber <= 0 || sampleActivity === null || sampleActivity.indexOf('\n') > -1 || sampleActivity.indexOf('\t') > -1 || sampleActivity.indexOf('\r') > -1) {
      return false;
  } else {
    number = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) / k);
    return number;
  }
}

module.exports = {
  dateSample
};
