const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let letters = [];
  if(Array.isArray(members) === false || members === null || members === undefined) {
    return false;
  }
  for(let i = 0; i < members.length; i++) {
      const name = members[i];
      if(typeof name === 'string') {
        letters.push(name.trim().slice(0, 1).toUpperCase());
      }
  }
  return letters.sort().join('');
}

module.exports = {
  createDreamTeam
};
