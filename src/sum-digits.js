const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

  function getSumOfDigits(digit){
    let result = 0;
    getOneDgit(digit);
    function getOneDgit(num){
        let res = 0;
        num.toString().split('').forEach(n => res += +n) ;
        if(res < 10){result = res} else {getOneDgit(res)}; 
    }
    return result;
}


module.exports = {
  getSumOfDigits
};
