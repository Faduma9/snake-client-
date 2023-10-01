let connection; 

const setupInput = function (conn) {
  connection = conn; 

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data",handleUserInput) 

  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') { 
    console.log("Exiting the game.");
    process.exit();

  } if (key === 'w') {
    console.log("Sending Move: up");
    connection.write("Move: up");
  

  } if (key === 'a') {
    console.log("Sending Move: left");
    connection.write("Move: left");
  
  } if (key === 's') {
    console.log("Sending Move: down");
    connection.write("Move: down");
   

  } if (key === 'd') {
    console.log("Sending Move: right");
    connection.write("Move: right");
    
  }
  if (key === '1') {
    console.log("Sending Message: Hello!");
    connection.write("Say: Hello!");

  } if (key === '2') {
    console.log("Sending Message: Goodbye!");
    connection.write("Say: Goodbye!");
  }
};


module.exports = { setupInput };
