var express = require('express');
const authTokens = require('./login').authTokens
var router = express.Router();

const page = 'anime-page'

const {MongoClient} = require('mongodb')
const uri = "mongodb+srv://db_user:batatadoce@cluster0.cekxy.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)

/* GET home page. */
router.get('/', function(req, res, next){
  res.redirect('/explorar')
  next()
})
router.get('/:animeUrl', function(req, res, next) { 
    findAnimeByUrl(client, req.params['animeUrl']).then(anime => {
        res.render('anime-page', { 
            page: page, 
            anime: anime,
            authTokens: authTokens
        }); 
    })
});

async function findAnimeByUrl(client, animeUrl){
  try {
    await client.connect()
    const anime = await client.db('pweb1').collection('animes').findOne({url: animeUrl})
    return anime
  } finally {
    client.close()
  }
}



module.exports = router;

