var express = require('express');
var router = express.Router();

const pageCSS = 'explorar'
const animes = require('../public/javascripts/database/animes')
const generos = require('../public/javascripts/database/generos')

/* GET home page. */
router.get('/', function(req, res, next){
  res.render('explorar', { pageCSS: pageCSS, generos: generos,animes: animes});
  next()
});
router.get('/:generoUrl', function(req, res, next){
  let generoUrl = req.params['generoUrl']
  let genero = generos.filter(genero => genero.url === generoUrl)[0]

  let animesGenero = animes.filter(anime => anime.generos.includes(genero.nome))

  console.log(generoUrl)
  console.log(genero)
  console.log(animesGenero)

  res.render('explorar', { pageCSS: pageCSS, generos: generos, animes: animesGenero});
})

module.exports = router;
