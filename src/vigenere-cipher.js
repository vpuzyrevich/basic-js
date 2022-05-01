const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(bool) {
      this.bool = bool;
      this.result = [];
  }
  encrypt(message, key) {
    let result = [];
    if(message === undefined || key === undefined) {
        throw new Error('Incorrect arguments!');
    }
    // const re = /[A-Z]/g;
    const lat = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let messageUp = message.toUpperCase();
    let keyUp = key.toUpperCase();
    
    let k = Math.ceil(messageUp.length / keyUp.length);
    keyUp = keyUp.repeat(k);
    // let messageArr = messageUp.split('');
    let start = 'A'.charCodeAt(0);
    let abcCount = 26;
    let keyArr = keyUp.split('');

    for (let i = 0; i < messageUp.length; i++) {
        if (lat.includes(messageUp[i])) {
            let letterIdx = messageUp.charCodeAt(i) - start;
            let shift = keyUp.charCodeAt(i) - start;
            result.push(
                String.fromCharCode(start + (letterIdx + shift) % abcCount)
            );
            
        } else {
            result.push(messageUp[i]);
            keyArr.splice(i, 0, messageUp[i]);
            keyUp = keyArr.join('');

        }
    }
    if(this.bool === true || this.bool === undefined) {
      return result.join('');
  } else {
      return result.reverse().join('');
  }
}
decrypt(message, key) {
    let result = [];
    if(message === undefined || key === undefined) {
        throw new Error('Incorrect arguments!');
    }
    const lat = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let messageUp = message.toUpperCase();
    let keyUp = key.toUpperCase();
    
    let k = Math.ceil(messageUp.length / keyUp.length);
    keyUp = keyUp.repeat(k);
    // let messageArr = messageUp.split('');
    let start = 'A'.charCodeAt(0);
    let abcCount = 26;
    let keyArr = keyUp.split('');

    for (let i = 0; i < messageUp.length; i++) {
        if (lat.includes(messageUp[i])) {
            let letterIdx = messageUp.charCodeAt(i) - start;
            let shift = keyUp.charCodeAt(i) - start;
            result.push(
                String.fromCharCode(start + (letterIdx - shift + abcCount) % abcCount)
            );
            
        } else {
            result.push(messageUp[i]);
            keyArr.splice(i, 0, messageUp[i]);
            keyUp = keyArr.join('');

        }
    }
    if(this.bool === true || this.bool === undefined) {
        return result.join('');
    } else {
        return result.reverse().join('');
    } 
}
}

module.exports = {
  VigenereCipheringMachine
};
