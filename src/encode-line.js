const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let ARR = str.split('');
  let result = '';
  function returnEl(array){
      if(array.length > 0) {
          let j = 1;
          let i = 0;
          while(array[i] === array[i+1]){
              j++;
              i++;
          } 
          result += ((j > 1 ? j : '') + '' + array[i]);              
          returnEl(array.splice(i+1));
      }
  }

 returnEl(ARR)

 return result;
}

module.exports = {
  encodeLine
};
