// index.js
const { nextISSTimesForMyLocation } = require('./iss');
const calculatePassTimes = require('./printISSTimes.js');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  calculatePassTimes(passTimes);
});