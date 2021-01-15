// index.js
const { nextISSTimesForMyLocation } = require('./iss');

const calculatePassTimes = function(times) {
  for (let pass of times) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    const duration = Math.floor(pass.duration / 60);
    console.log(`Next pass at ${dateTime} for ${duration} minutes!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  calculatePassTimes(passTimes);
});