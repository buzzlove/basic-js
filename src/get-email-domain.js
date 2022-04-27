const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(str){
  let result = '';
  getEmail(str);
  function getEmail(str){
      let nextSymbol = (str.indexOf('@') + 1);
      if(str[nextSymbol] !== '.'){
          result = str.slice(nextSymbol);
      }
      else {
          getEmail(str.slice(nextSymbol))
      }
  } 
  return result;
}

module.exports = {
  getEmailDomain
};
