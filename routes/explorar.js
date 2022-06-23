var express = require('express');
var router = express.Router();
const authTokens = require('./login').authTokens

const {MongoClient} = require('mongodb')
const uri = "mongodb+srv://db_user:batatadoce@cluster0.cekxy.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)

const page = 'explorar'

/* GET home page. */
router.get('/', function(req, res, next){
    getAnimesAndGeneros(client).then(({animes, generos}) => {
        if(isLogged(req)){
            res.render('explorar', {
                page: page,
                animes: animes,
                generos: generos,
                user: getLoggedUser(req)
            })
        } else {
            res.render('explorar', {
                page: page,
                animes: animes,
                generos: generos,
                user: false
            })
        }
        next()
    })
})
router.get('/:generoUrl', function(req, res, next){
    findAnimesByGenerosAndGeneros(client, req.params['generoUrl']).then(({animesGenero, generos}) => {
        if(isLogged(req)){
            res.render('explorar', {
                page: page,
                generos: generos,
                animes: animesGenero,
                user: getLoggedUser(req)
            })
        } else {
            res.render('explorar', {
                page: page,
                generos: generos,
                animes: animesGenero,
                user: false
            })
        }
    })
});

async function getAnimesAndGeneros(client){
    try{
        await client.connect()
        const animes = await getAnimes(client)
        const generos = await getGeneros(client)
        return {animes, generos}
    } finally {
        client.close()
    }
}

async function findAnimesByGenerosAndGeneros(client, generoUrl){
    try{
        await client.connect()
        const genero = await findGenero(client, generoUrl)
        const animesGenero = await findAnimesByGenero(client, genero)
        const generos = await getGeneros(client)
        return {animesGenero, generos}
    } finally {
        client.close()
    }
}


async function getAnimes(client){
    const animes = await client.db('pweb1').collection('animes').find({}).sort({nomeJapones: 1})
    const result = await animes.toArray()
    return result
}

async function getGeneros(client){
    const generos = await client.db('pweb1').collection('generos').find({})
    const result = await generos.toArray()
    return result
}

async function findGenero(client, generoUrl){
    const genero = await client.db('pweb1').collection('generos').findOne({url: generoUrl})
    return genero
}

async function findAnimesByGenero(client, genero){
    const animesGenero = client.db('pweb1').collection('animes').find({generos: genero.nome}).sort({nomeJapones: 1})
    const result = await animesGenero.toArray()
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
