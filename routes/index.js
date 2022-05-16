var express = require('express');
var router = express.Router();

const page = 'index'
const animes = require('../public/javascripts/database/animes')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    page: page,
    animes: animes
  });
});

module.exports = router;
