const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });
  
  conn.on('connect', () => {
    // code that does something when the connection is first established
    console.log("Let us play the game!");
    conn.write('Name: DAX');
    
  });
  conn.on("data", (data) => {
    console.log("server: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;
};

module.exports = { connect };

