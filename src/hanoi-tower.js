const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 function calculateHanoi(disksNumber, turnsSpeed) {
  const TURNS_NUM = 2**disksNumber - 1;
  const TIMES = Math.floor(TURNS_NUM/(turnsSpeed/3600));
  const RESULT = { turns: TURNS_NUM, seconds: TIMES };

  return RESULT;
}

module.exports = {
  calculateHanoi
};
