const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr){
  let objOne = [];
  let objAll = [];
  arr.map((el,index) => el === -1 ? objOne.push(index) : objAll.push(el));
  objAll.sort((a,b) => a-b);
  for(let n in objOne){
      objAll.splice(objOne[n], 0, -1);
  }
  return (objAll)

}

module.exports = {
  sortByHeight
};
