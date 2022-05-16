var express = require('express');
var router = express.Router();

const page = 'calendario'
const animes = require('../public/javascripts/database/animes')
const dias = require('../public/javascripts/database/dias')

/* GET home page. */
router.get('/', function(req, res, next) {
  const animesAndamento = getAnimesOngoing()
  res.render('calendario', { page: page, dias: dias, animes: animesAndamento });
  next()
});

router.get('/:diaUrl', function(req, res, next){
  let dia = getDia(req.params['diaUrl'])
  let animesDia = getAnimesDia(dia.nome)

  console.log(dia)
  console.log(animesDia)

  res.render('calendario', { page: page, dias: dias, animes: animesDia});
})

function getAnimesOngoing(){
  return animes.filter(anime => anime.status === "Em Andamento")
}

function getAnimesDia(dia){
  return getAnimesOngoing().filter(anime =>  (anime.weekaired === dia))
}

function getDia(diaUrl){
  return dias.filter(dia => dia.url === diaUrl)[0]
}

module.exports = router;
