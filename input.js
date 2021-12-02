const setupInput = function() {
  const connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  
  return stdin;
};

const handleUserInput = function(data) {
  if (data === 'i') {
    connection.write("Move up: ");
  }

  if (data === 'j') {
    connection.write("Move left: ");
  }

  if (data === 'm') {
    connection.write("Move down: ");
  }

  if (data === 'l') {
    connection.write("Move right: ");
  }
};
module.exports = {setupInput};
