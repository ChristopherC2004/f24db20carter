var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('journal', { title: 'Search Results Journal' });
});

module.exports = router;
