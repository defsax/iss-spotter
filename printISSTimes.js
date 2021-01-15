const calculatePassTimes = function(times) {
  for (let pass of times) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    const duration = Math.floor(pass.duration / 60);
    console.log(`Next pass at ${dateTime} for ${duration} minutes!`);
  }
};

module.exports = calculatePassTimes;