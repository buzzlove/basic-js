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
 function getSeason(data) {
  const season = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  for(let key in data){if(key){throw new SyntaxError("Invalid date!");}}
  try {       
    return (typeof(data) !== 'undefined') ? (season[data.getMonth()]) : 'Unable to determine the time of year!';
  }
  catch {
      throw new SyntaxError("Invalid date!");
  }  
}

module.exports = {
  getSeason
};
