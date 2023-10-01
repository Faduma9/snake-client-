const { connect } = require("./client");
const { setupInput } = require("./input"); // Import the setupInput function

console.log("Connecting ...");
connect();

setupInput(); // Call the setupInput function
