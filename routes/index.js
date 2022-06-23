const express = require('express');
const router = express.Router();
const authTokens = require('./login').authTokens

const {MongoClient} = require('mongodb')
const uri = "mongodb+srv://db_user:batatadoce@cluster0.cekxy.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)

const page = 'index'

router.use((req, res, next) => {
    const authToken = req.cookies['AuthToken'];
    req.user = authTokens[authToken]
    next()
})

/* GET home page. */
router.get('/', function(req, res, next) {
    getAnimes(client).then(animes => {
        if(isLogged(req)){
            res.render('index', {
                page: page,
                animes: animes,
                user: getLoggedUser(req)
            })
        } else {
            res.render('index', {
                page: page,
                animes: animes,
                user: false
            })
        }
    })
});

async function getAnimes(client){
  const animes = await client.db('pweb1').collection('animes').find({}).sort({nomeJapones: 1})
  const result = await animes.toArray()
  return result
}

function getLoggedUser(req){
    const authToken = req.cookies['AuthToken']
    const user = authTokens[authToken]
    return user
}

function isLogged(req){
  const authToken = req.cookies['AuthToken'];
  return authTokens[authToken] ? true : false
}

module.exports = router;
