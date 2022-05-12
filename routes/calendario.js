var express = require('express');
var router = express.Router();

const pageCSS = 'calendario'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('calendario', { pageCSS: pageCSS });
});

module.exports = router;
