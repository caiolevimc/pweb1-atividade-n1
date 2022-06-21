const express = require('express');
const router = express.Router();
const crypto = require('crypto')

const page = 'login'

const {MongoClient} = require('mongodb')
const uri = "mongodb+srv://db_user:batatadoce@cluster0.cekxy.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)

const authTokens = {}

router.get('/', (req, res, next) => {
    if(isLogged(req)){
        res.render('login', { page: page, message: 'User already logged', messageClass: 'alert-danger', user: true })
    } else {
        res.render('login', { page: page, message: '', messageClass: '', user: false })
    }
    
})

router.post('/', (req, res, next) => {
    const { email, password } = req.body
    const hashedPassword = getHashedPassword(password);

    verifyLogin(client, email, hashedPassword).then(user => {
        if (user) {          
            const authToken = generateAuthToken();
            console.log(`AuthToken: ${authToken}`)
            // Store authentication token
            authTokens[authToken] = user;
            console.log(`AuthTokens: ${authTokens}`)
    
            // Setting the auth token in cookies
            res.cookie('AuthToken', authToken);
            console.log(`Adicionado aos cookies: ${authToken}`)
    
            // Redirect user to the protected page
            res.redirect('/');
        } else {
            res.render('login', {
                message: 'Invalid username or password',
                messageClass: 'alert-danger'
            });
        }
    })
})

router.use((req, res, next) => {
    const authToken = req.cookies['AuthToken'];
    req.user = authTokens[authToken]
    next()
})

async function verifyLogin(client, email, password){
    try {
        await client.connect()
        const user = await client.db('pweb1').collection('users').findOne({
            email: email,
            password: password
        })
        return await user
    } finally {
        client.close()
    }
}

const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}

const generateAuthToken = () => {
    return crypto.randomBytes(30).toString('hex');
}

function isLogged(req){
    const authToken = req.cookies['AuthToken'];
    return authTokens[authToken] ? true : false
}

module.exports = {router, authTokens};