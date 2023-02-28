const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It did not work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP: ", ip);
// });

// fetchCoordsByIP("207.216.253.1kh99", (error, coor) => {
//   if (error) {
//     console.log("It did not work!", error);
//     return;
//   }
//   console.log("It worked! Returned coordinatess: ",coor);
// });
fetchISSFlyOverTimes(
  { latitude: "49.27670", longitude: "-123.13000" },
  (error, passTimes) => {
    if (error) {
      console.log("It did not work!", error);
      return;
    }
    console.log("It worked! Returned fly over times: ", passTimes);
  }
);
