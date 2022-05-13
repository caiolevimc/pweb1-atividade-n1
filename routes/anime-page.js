var express = require('express');
var router = express.Router();

const pageCSS = 'anime-page'
const animes = require('../public/javascripts/database/animes')

/* GET home page. */
router.get('/', function(req, res, next){
  res.redirect('/animes')
  next()
})
router.get('/:animeUrl', function(req, res, next) { 
  const anime = getAnime(req.params['animeUrl'])
  console.log(req.params['animeUrl'])
  console.log(anime)
  res.render('anime-page', { pageCSS: pageCSS, anime: anime});
});

module.exports = router;

function getAnime(url){
  for(anime of animes){
    if(anime.url === url) {return anime}
  }
}