const { nextISSTimes } = require('./iss-promised.js');
const printPassTimes = require('./printISSTimes.js');

//nextISSTimes is a promise. if/when all its' .thens are complete,
//then run these .thens
nextISSTimes()
  .then(function(passTimes) {
    printPassTimes(passTimes);
  })
  .catch(function(err) {
    console.log('Oh no! It didn\'t work!', err.message);
  });