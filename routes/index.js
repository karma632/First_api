var express = require('express');
var router = express.Router();

//gets the form and renders it
router.get('/', function(req, res, next) {
  res.render('pigin')
});

module.exports = router;
