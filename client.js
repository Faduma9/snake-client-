const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost", // Replace with the server's IP address
    port: 50541,       // Replace with the server's PORT number
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
