var express = require('express');
var router = express.Router();

const page = 'explorar'
const animes = require('../public/javascripts/database/animes')
const generos = require('../public/javascripts/database/generos')

/* GET home page. */
router.get('/', function(req, res, next){
  res.render('explorar', { page: page, generos: generos, animes: animes});
}).get('/:generoUrl', function(req, res, next){
  let genero = getGenero(req.params['generoUrl'])

  let animesGenero = getAnimes(genero.nome)

  res.render('explorar', { page: page, generos: generos, animes: animesGenero});
});

function getGenero(url){
  return generos.filter(genero => genero.url === url)[0]
}

function getAnimes(genero){
  return animes.filter(anime => anime.generos.includes(genero))
}

module.exports = router;
