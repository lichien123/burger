var orm = require("../config/orm.js")

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(vals, cb) {
   orm.insertOne(vals, function(res) {
     cb(res);
   });
	},
  update: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(result) {
      cb(result)
    });
  },

  delete: function(condition, cb) {
    orm.delete(condition, function(result) {
      cb(result);
    });
  }
  };


module.exports = (burger);