const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

 function repeater(str, options) {
  let result = '';
  if(options.addition === false) {options.addition = 'false'}
  if(options.addition === null) {options.addition = 'null'}
  options.separator = options.separator || '+';
  options.additionSeparator = options.additionSeparator || '|';
  options.repeatTimes = options.repeatTimes || 1;
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.addition = options.addition || '';
  //String(options.addition)
  //options.addition = ((typeof(options.addition) !== 'binary') ? options.addition : options.addition.toString()) || '';
  function repeat(callNum){
      let res = str;
      for(let i = 0; i < options.additionRepeatTimes; i++){
          res+= options.addition + ((i !== (options.additionRepeatTimes-1)) ? options.additionSeparator:'');
      }
      result += res + ((callNum === 'last') ? '' : options.separator);
  }
  for(let i = 0; i < options.repeatTimes; i++){
      ((i !== (options.repeatTimes-1) ) ? repeat('noLat') : repeat('last'));
      
  }   
  return result; 
}


module.exports = {
  repeater
};
