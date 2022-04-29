const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  result: '',
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(value === undefined) {
      this.chain.push('( )');
      return this;
    }else if(value === null) {
      this.chain.push(`( null )`);
      return this;
    } else if(typeof value === 'object') {
      this.chain.push(`( [object Object] )`);
      return this;
    }  else {
      this.chain.push(`( ${value} )`);
      return this;
    }
  },
  removeLink(position) {
      if (typeof position !== 'number' || !(Number.isInteger(position)) || position <= 0 || position >= this.chain.length) {
          this.result = '';
          this.chain = [];
          throw new Error ('You can\'t remove incorrect link!');
      } else {
          this.chain.splice(position-1, 1);
      }
      return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
      let resultCopy = '';
      for(let i = 0; i < this.getLength(); i++){
          this.result = `${this.result}${this.chain[i]}~~`;
      }
      this.result = this.result.slice(0, -2);
      resultCopy = this.result;
      this.chain = [];
      this.result = '';
      return resultCopy;
  }
};

module.exports = {
  chainMaker
};
