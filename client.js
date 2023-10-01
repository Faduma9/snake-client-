const net = require("net");

// establishes a connection with the game server
const connect = function() {
    const conn = net.createConnection({
        host: "172.29.73.110", // Replace with the server's IP address
        port: 50541,       // Replace with the server's PORT number
    });

    // interpret incoming data as text
    conn.setEncoding("utf8");

    // Event handler for incoming data from the server
    conn.on("data", (data) => {
        console.log("Message from server:", data);
    
        if (data === "you ded cuz you idled") {
          // Handle the situation when the server kicks the player out for idling
          console.log("Oh no, you were kicked out for idling!");
        } else if (data === "It's got a sharp tongue, this server!") {
          // Display the humorous comment from the server
          console.log("Server says:", data);
        }
      });

    return conn;
};

module.exports = { connect };