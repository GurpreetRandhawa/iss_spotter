const request = require("request");
const fetchMyIP = function (callback) {
  request("https://api.ipify.org?format=json", (error, response, body) => {
    if (error) {
      return callback(error, null);
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const data = JSON.parse(body);
    callback(error, data.ip);
  });
};

const fetchCoordsByIP = function (ipAddress, callback) {
  request(`http://ipwho.is/${ipAddress}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.success === false) {
      const message = `Success status was ${data.success}. Server message says: ${data.message} when fetching for IP ${data.ip}`;
      callback(Error(message), null);
      return;
    }
    const { latitude, longitude } = data;
    callback(null, { latitude, longitude });
  });
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
};
