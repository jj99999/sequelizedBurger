var express = require('express');
var router = express.Router();
// get burger models
var models = require('../models');

var sequelizeConnection = models.sequelize;
// sync the tables
sequelizeConnection.sync();

// route for getting all the burgers
router.get('/', function (req, res) {

  models.Burger.findAll({
  })
  .then(function(data) {
      var hbsObject = {burgers: data};
      res.render('index', hbsObject);
    })
});

router.post('burger/create', function (req, res) {
  
  models.Burger.create({
    burger_name: req.body.name,
    devoured: false,
  })
  .then(function() {
    res.redirect('/');
  	})
});

router.put('burger/update/:id', function(req,res) {
  models.Burger.update(
  {
    true: req.body.devoured
  },
  {
    where: { id : req.params.id }
  })
  
  .then(function (result) {
    res.redirect('/');
  })
});

router.delete('/burger/delete/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	burger.delete(condition, function () {
		res.redirect('/burgers');
	});
});

router.delete('burger/delete/:id', function(req,res) {
  models.Burger.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function() {
    res.redirect('/');
  })
});

module.exports = router;