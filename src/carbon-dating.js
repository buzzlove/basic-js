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
  const LN_TWO = 0.693
  const RATE_CONSTANT = LN_TWO/HALF_LIFE_PERIOD;
  if(typeof(sampleActivity) === 'string' && +sampleActivity > 0){
      const RATIO = Math.ceil(Math.log(MODERN_ACTIVITY/+sampleActivity)/RATE_CONSTANT);
      return RATIO > 0 ? RATIO : false;
  } else {return false}
}

module.exports = {
  dateSample
};
