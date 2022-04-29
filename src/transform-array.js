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

 function transform(arr) {
  let array = [].concat(arr);
  if(!Array.isArray(arr)) {
      throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  for(let i = 0; i < array.length; i++) {
      if(array[i] === '--discard-next' && array[i+2] === '--discard-prev') {
          array.splice(i+2, 1);
      } else if(array[i] === '--discard-next' && array[i+2] === '--double-prev') {
      array.splice(i+2, 1);
  } 
      }   


  for(let i = 0; i < array.length; i++) {
    if(array[i] === '--discard-next') {
      if(array[i+1] === undefined) {
          array.splice(i, 1);
          break;
      } else {
          array.splice(i, 2);
      }
    } else if(array[i] === '--discard-prev') {
        if(array[i-1] === undefined) {
          array.splice(i, 1);
          i++;
        } else {
          array.splice(i-1, 2);
        }   
    } else if(array[i] === '--double-next') {
      if(array[i+1] === undefined) {
          array.splice(i, 1);
          console.log(array);
          break;
      } else {
          array.splice(i, 1, array[i+1]);
      }
    } else if(array[i] === '--double-prev') {
        if(array[i-1] === undefined) {
          array.splice(i, 1);
          i++;
        } else {
          array.splice(i, 1, array[i-1]);
        }
    }
}
return array;
}

module.exports = {
  transform
};
