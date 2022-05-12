var express = require('express');
var router = express.Router();

const pageCSS = 'explorar'
const animes = require('./database')
const animesSorted = animes.sort((anime1, anime2) => {
  if(anime1.nomeJapones > anime2.nomeJapones){
    return 1
  } else if(anime1.nomeJapones < anime2.nomeJapones){
    return -1
  } else {
    return 0
  }
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('explorar', { pageCSS: pageCSS, animes: animesSorted});
});

module.exports = router;
