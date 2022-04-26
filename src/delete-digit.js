const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let arr = [];
  for(let i = 0; i < n.toString().length;i++){
      let numArr = n.toString().split('')
      numArr.splice(i, 1)
      arr.push(numArr.join(''));
  }
 return(+arr.sort((a,b)=> b-a)[0])
}

module.exports = {
  deleteDigit
};
