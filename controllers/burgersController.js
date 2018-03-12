var express = require("express");
var burger = require("../models/burger.js")

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
	var newBurger = [req.body.burger_name, false];

  burger.insertOne(
	newBurger, function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// update
router.put('/api/burger/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  var updateCols = {devoured: true}

  burger.update(updateCols, condition, function(data) {

    if (data.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();  
    }
  });
});

router.delete("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = (router);