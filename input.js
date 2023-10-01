const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
  };
  
  const handleUserInput = function (key) {
    if (key === '\u0003') { // Check for Ctrl + C (represented by '\u0003')
      process.exit();
    }
  };
  
  const stdin = setupInput(); // Call setupInput to initialize stdin
  
  // Register handleUserInput as the "data" callback handler for stdin
  stdin.on("data", handleUserInput);
  
  module.exports = { setupInput };