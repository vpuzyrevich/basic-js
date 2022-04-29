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
  let string;
  let additionStr;
  let additionArr = [];
  let additionRes;
  if(typeof str !== 'string') {
      string = String(str);
  } else {
      string = str;
  }
  if(options.addition === undefined) {
      options.addition = '';
  }
  if(options.addition !== undefined && typeof options.addition !== 'string') {
      additionStr = String(options.addition);
  } else {
      additionStr = options.addition;
  }
  if(options.separator === undefined) {
      options.separator = '+';
  }
  if(options.additionSeparator === undefined) {
      options.additionSeparator = '|';
  }
  if(options.additionRepeatTimes !== undefined) {
      for(let i =0; i < options.additionRepeatTimes; i++) {
          additionArr.push(`${additionStr}`);
          additionArr.push(`${options.additionSeparator}`);
      }
      additionArr.pop();
      additionRes = additionArr.join('');
  } else {
      additionRes = `${additionStr}`;
  }
  let arr = [];
  let result;
  if(options.repeatTimes !== undefined) {
      for(let i =0; i < options.repeatTimes; i++) {
          arr.push(`${string}${additionRes}`);
          arr.push(`${options.separator}`);
      }
      arr.pop();
      result = arr.join('');
  } else {
      result = `${string}${additionRes}`;
  }
  return result;
}

module.exports = {
  repeater
};
