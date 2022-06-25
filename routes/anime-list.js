var express = require('express');
var router = express.Router();
const authTokens = require('./login').authTokens

const page = 'anime-list'

const {MongoClient} = require('mongodb')
const uri = "mongodb+srv://db_user:batatadoce@cluster0.cekxy.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)

router.get('/', (req, res, next) => {
    if(isLogged(req)){
        const user = getLoggedUser(req)

        getAnimeList(client, user).then(animes => {
            res.render('anime-list', {
                page,
                user,
                animes
            })
        })
    } else {
        res.redirect('/login')
    }
})

async function getAnimeList(client, user){
    try {
        await client.connect()
        const animesListId = await getAnimesListId(client, user)
        console.log(animesListId)
        const animesList = await client.db('pweb1').collection('animes').find({
            _id: { $in: animesListId }
        }).toArray()
        return await animesList
    } finally {
        client.close()
    }
}

async function getAnimesListId(client, user){
    const userAnimes = await client.db('pweb1').collection('user-anime').find({userId: user._id}).toArray()
    const animesId = await userAnimes.map(userAnime => userAnime.animeId)
    return await animesId
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

module.exports = router