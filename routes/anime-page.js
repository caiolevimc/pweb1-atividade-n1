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
        console.log(anime._id)
        if(isLogged(req)){
            const user = getLoggedUser(req)
            console.log(user._id)
            isAnimeOnAnimeList(client, user, anime).then(isOnAnimeList => {
                res.render('anime-page', { 
                    page,
                    anime,
                    user,
                    isOnAnimeList
                });
            }).catch(e => console.error(e))
        } else {
            res.render('anime-page', { 
                page: page, 
                anime: anime,
                user: false,
                isOnAnimeList: false
            });
        }
    })
});

router.get('/:animeUrl/add-anime', (req, res, next) => {
    const user = getLoggedUser(req)
    const animeUrl = req.params['animeUrl']

    if(isLogged(req)){
        findAnimeByUrl(client, req.params['animeUrl']).then(anime => {
            addAnimeOnUserAnimeList(client, user, anime).then(() => {
                res.redirect(`back`)
            }).catch(e => console.error(e))
            
        }).catch(e => console.error(e))
    } else {
        res.redirect('/login')
    }
})


router.get('/:animeUrl/remove-anime', (req, res, next) => {
    const user = getLoggedUser(req)
    const animeUrl = req.params['animeUrl']

    if(isLogged(req)){
        findAnimeByUrl(client, animeUrl).then(anime => {
            removeAnimeOfUserAnimeList(client, user, anime).then(() => {
                res.redirect('back')
            })
            .catch(e => console.error(e))
        })
    } else {
        res.redirect('/login')
    }
})

async function removeAnimeOfUserAnimeList(client, user, anime){
    try {
        await client.connect()
        await client.db('pweb1').collection('user-anime').deleteOne({
            userId: user._id,
            animeId: anime._id
        })
    } finally {
        client.close()
    }
}

async function addAnimeOnUserAnimeList(client, user, anime){
    try {
        await client.connect()
        await client.db('pweb1').collection('user-anime').insertOne({
            userId: user._id,
            animeId: anime._id
        })
    } finally {
        client.close()
    }
}

async function isAnimeOnAnimeList(client, user, anime){
    try {
        await client.connect()
        const hasAnime = await client.db('pweb1').collection('user-anime').findOne({
            userId: user._id,
            animeId: anime._id
        })
        return await hasAnime ? true : false
    } finally {
        client.close()
    }
}

async function findAnimeByUrl(client, animeUrl){
    try {
        await client.connect()
        const anime = await client.db('pweb1').collection('animes').findOne({url: animeUrl})
        return anime
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

