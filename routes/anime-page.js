var express = require('express');
var router = express.Router();

const {MongoClient} = require('mongodb')
const uri = "mongodb+srv://db_user:batatadoce@cluster0.cekxy.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)
const page = 'anime-page'

/* GET home page. */
router.get('/', function(req, res, next){
  res.redirect('/explorar')
  next()
})
router.get('/:animeUrl', function(req, res, next) { 
  findAnimeByUrl(client, req.params['animeUrl']).then(anime => {
    res.render('anime-page', { 
      page: page, 
      anime: anime
    });
  })
});

module.exports = router;

async function findAnimeByUrl(client, animeUrl){
  try {
    await client.connect()
    const anime = await client.db('pweb1').collection('animes').findOne({url: animeUrl})
    return anime
  } finally {
    client.close()
  }
}