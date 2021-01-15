// iss_promised.js
const request = require('request-promise-native');

// use request to fetch IP address from JSON API
const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

//use request to fetch local coordinates by IP address
const fetchCoordsByIp = function(IP) {
  return request(`https://freegeoip.app/json/${JSON.parse(IP).ip}`);
};

// use request to fetch flyover times from NASA API
const fetchISSFlyoverTimes = function(coords) {
  return request(`http://api.open-notify.org/iss-pass.json?lat=${JSON.parse(coords).latitude}&lon=${JSON.parse(coords).longitude}`);
};

//return nextISSTimes as a promise
const nextISSTimes = function() {
  //only return after all .thens have returned without error
  return fetchMyIP()
    .then(fetchCoordsByIp) //values are passed along the chain
    .then(fetchISSFlyoverTimes) //their arguments and return values are defined in their callbacks.
    .then(function(times) {
      //returns this value with fetchMyIP promise
      return JSON.parse(times).response;
    });
};

module.exports = { nextISSTimes };