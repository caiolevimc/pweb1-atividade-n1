const express = require('express');
const router = express.Router();
const crypto = require('crypto')
const authTokens = require('./login').authTokens


const page = 'register'

const {MongoClient} = require('mongodb')
const uri = "mongodb+srv://db_user:batatadoce@cluster0.cekxy.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)

router.get('/', (req, res, next) => {
    res.render('register', { page: page, message: '', messageClass: '' })
})

router.post('/', (req, res, next) => {
    const {username, email, password, confirmPassword} = req.body

    if(password === confirmPassword){
        
        verifyEmail(client, email).then(result => {
            if(!result){
                registerUser(client, username, email, password)
                console.log('Usuário Cadastrado com sucesso')
                res.render('login', {
                    page: 'login',
                    message: 'Registration Complete. Please login to continue.',
                    messageClass: 'alert-success'
                });
                
            } else {
                console.log("Usuário já cadastrado: "+result)
                res.render('register', {
                    page: page,
                    message: 'User already registered.',
                    messageClass: 'alert-danger'
                })
            }
        })
    } else {
        res.render('register', {
            page: page,
            message: "The password doesn't match",
            messageClass: 'alert-danger'
        })
    }
})

async function verifyEmail(client, email){
    try{
        await client.connect()
        const user = await client.db('pweb1').collection('users').findOne({email: email})
        return await user ? true : false
    } finally {
        await client.close()
    }
}

async function registerUser(client, username, email, password){
    try{
        await client.connect()
        await client.db('pweb1').collection('users').insertOne({
            username, 
            email, 
            password: getHashedPassword(password),
        })
    } finally {
        await client.close()
    }
}

const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}

function isLogged(req){
    const authToken = req.cookies['AuthToken'];
    return authTokens[authToken] ? true : false
}

module.exports = router;