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
  constructor(reversed = true) {
    this.reversed = reversed;
  }
  encrypt(message, key) {
    if(!message || !key) throw new Error('Incorrect arguments!');
    
    message = message.toUpperCase();
    key = key.toUpperCase();

    let newMessage = '';

    for(let i = 0, j = 0; i < message.length; i++) {
      if(/[A-Z]/i.test(message[i])) {
        newMessage += String.fromCharCode(
          (message.charCodeAt(i) + key.charCodeAt(j) - 2 * 65) % 26 + 65
        );
      } else {
        newMessage += message[i];
        j--;
      }
      j = (j + 1) % key.length;
    }

    if(!this.reversed) newMessage = newMessage.split('').reverse().join('');

    return newMessage;
  }
  decrypt(message, key) {
    if(!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();
    
    let newMessage = '';

    for(let i = 0, j = 0; i < message.length; i++) {
      if(/[A-Z]/i.test(message[i])) {
        newMessage += String.fromCharCode(
          90 - (25 - (message.charCodeAt(i) - key.charCodeAt(j))) % 26
        );
      } else {
        newMessage += message[i];
        j--;
      }
      j = (j + 1) % key.length;
    }

    if(!this.reversed) newMessage = newMessage.split('').reverse().join('');

    return newMessage;
  }
}

module.exports = {
  VigenereCipheringMachine
};
