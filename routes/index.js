const express = require('express');
const router = express.Router();
const authTokens = require('./login').authTokens

const {MongoClient} = require('mongodb')
const uri = "mongodb+srv://db_user:batatadoce@cluster0.cekxy.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)

const page = 'index'

/* GET home page. */
router.get('/', function(req, res, next) {
    getAnimes(client).then(animes => {
        if(isLogged(req)){
            const user = getLoggedUser(req)
            getAnimeList(client, user).then(animeList => {
                res.render('index', {
                    page,
                    animes,
                    user,
                    animeList: animeList.slice(0, 5)
                })
            })
        } else {
            res.render('index', {
                page,
                animes,
                user: false,
                animeList: []
            })
        }
    })
});

async function getAnimeList(client, user){
    try {
        await client.connect()
        const animesId = await getAnimesListId(client, user)
        const animeList = await client.db('pweb1').collection('animes').find({
            _id: { $in: animesId }
        }).toArray()
        return await animeList
    } finally {
        client.close()
    }
}

async function getAnimesListId(client, user){
    const userAnimes = await client.db('pweb1').collection('user-anime').find({userId: user._id}).toArray()
    const animesId = await userAnimes.map(userAnime => userAnime.animeId)
    return await animesId
}

async function getAnimes(client){
    try {
        await client.connect()
        const animes = await client.db('pweb1').collection('animes').find({}).sort({nomeJapones: 1})
        const result = await animes.toArray()
        return result
    } finally {
        client.close()
    }
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
