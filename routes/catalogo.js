var express = require('express');
var router = express.Router();

const pageCSS = 'catalogo'
const animes = require('./database')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('catalogo', { pageCSS: pageCSS });
});

module.exports = router;
