const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Event handler for incoming data from the server
  conn.on("data", (data) => {
    console.log("Message from server:", data);
  });

  // Register a "connect" event handler
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SNK");
  });

  return conn;
};

module.exports = { connect };
