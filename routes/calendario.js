var express = require('express');
var router = express.Router();

const {MongoClient} = require('mongodb')
const uri = "mongodb+srv://db_user:batatadoce@cluster0.cekxy.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)

const page = 'calendario'

async function getAnimesOnGoingAndDias(client){
  try{
    await client.connect()
    const animes = await getAnimesOnGoing(client)
    const dias = await getDias(client)
    return {animes, dias}
  } finally {
    client.close()
  }
}

async function findAnimesByDiaAndDias(client, diaUrl){
  try{
    await client.connect()
    const dia = await findDia(client, diaUrl)
    const animesDoDia = await findAnimesByDia(client, dia)
    const dias = await getDias(client)
    return {animesDoDia, dias}
  } finally {
    client.close()
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  getAnimesOnGoingAndDias(client).then(({animes, dias}) => {
    res.render('calendario', {
      page: page,
      dias: dias,
      animes: animes
    })
    next()
  })
});

router.get('/:diaUrl', function(req, res, next){
  findAnimesByDiaAndDias(client, req.params['diaUrl']).then(({animesDoDia, dias}) => {
    res.render('calendario', {
      page: page,
      dias: dias,
      animes: animesDoDia     
    })
  })
});

async function getAnimesOnGoing(client){
  const animes = await client.db('pweb1').collection('animes').find({weekaired: {$ne: ""}}).sort({nomeJapones: 1})
  const result = await animes.toArray()
  return result
}

async function getDias(client){
  const dias = await client.db('pweb1').collection('dias').find({})
  const result = await dias.toArray()
  return result
}

async function findDia(client, diaUrl){
  const dia = await client.db('pweb1').collection('dias').findOne({url: diaUrl})
  return dia
}

async function findAnimesByDia(client, dia){
  const animesDoDia = client.db('pweb1').collection('animes').find({weekaired: dia.nome}).sort({nomeJapones: 1})
  const result = await animesDoDia.toArray()
  return result
}

module.exports = router;
