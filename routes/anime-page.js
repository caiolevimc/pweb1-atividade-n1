var express = require('express');
var router = express.Router();
const authTokens = require('./login').authTokens

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
        if(isLogged(req)){
            res.render('anime-page', { 
                page: page, 
                anime: anime,
                authTokens: authTokens,
                user: true
            });
        } else {
            res.render('anime-page', { 
                page: page, 
                anime: anime,
                authTokens: authTokens,
                user: false
            });
        }
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

function isLogged(req){
    const authToken = req.cookies['AuthToken'];
    return authTokens[authToken] ? true : false
}

module.exports = router;

