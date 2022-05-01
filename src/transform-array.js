const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(array) {
  if(!Array.isArray(array)){throw new Error("'arr' parameter must be an instance of the Array!")};
  let arr = [...array];
  
array.forEach((item,index) => {if(typeof(item) === 'string'){transformationArray(item, index)}})

function transformationArray(item, index){
   switch (item){
      case '--discard-next':          
          (index +1 !== (arr.length)) ?  arr.splice(index+1, 1):'';
          arr.splice(arr.indexOf('--discard-next'), 1);
          break;
      case '--discard-prev':
          if(array[index-2] !== '--discard-next'){
              index > 0 ? arr.splice(index-1, 1):'';
          }
          arr.splice(arr.indexOf('--discard-prev'), 1);
          break; 
      case '--double-next':
          
          (index+1 !== arr.length) ? arr.splice(index+1, 0, arr[index+1]) : '';
          arr.splice(arr.indexOf('--double-next'), 1);
          break;
      case '--double-prev':
          if(array[index-2] !== '--discard-next'){
              (index > 0) ? arr.splice(index-1, 0, arr[index-1]) : '';
              }  
          arr.splice(arr.indexOf('--double-prev'), 1);          
          break;                        
   }
}

return arr;
} 

module.exports = {
  transform
};
