var express = require('express');
var router = express.Router();

const pageCSS = 'index'
const animes = require('./database')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    pageCSS: pageCSS,
    animes: animes
  });
});

module.exports = router;
