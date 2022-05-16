var express = require('express');
var router = express.Router();

const page = 'anime-page'
const animes = require('../public/javascripts/database/animes')

/* GET home page. */
router.get('/', function(req, res, next){
  res.redirect('/animes')
  next()
})
router.get('/:animeUrl', function(req, res, next) { 
  const anime = getAnime(req.params['animeUrl'])
  res.render('anime-page', { page: page, anime: anime});
});

module.exports = router;

function getAnime(url){
  for(anime of animes){
    if(anime.url === url) {return anime}
  }
}