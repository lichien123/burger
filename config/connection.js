var mysql = require("mysql");



// Creating our connection
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burger_db"
  });


// Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


//exporting variables
module.exports = (connection);