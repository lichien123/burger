var connection = require("./connection.js");


var orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(err, result) {
			if (err) throw err;
			// console.log(result);
			cb(result);
		});
	},
	insertOne: function(vals, cb) {
	    console.log(vals);

	    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ('" + vals[0] + "'," + vals[1] + ")";

	    connection.query(queryString, vals, function(err, result) {
	      if (err) {
	        throw err;
	      }

	      cb(result);
	    });
	  },
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = 'UPDATE ' + table;
    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  delete: function(condition, cb) {
    var queryString = 'DELETE FROM burgers WHERE ??';
    console.log(condition);

    connection.query(queryString, condition, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }

};


module.exports = (orm);