var express = require('express');
var router = express.Router();
const authTokens = require('./login').authTokens

router.get('/', (req, res, next) => {
    if(isLogged(req)){
        const authToken = req.cookies['AuthToken']
        res.clearCookie('AuthToken')
        delete authTokens[authToken]
        res.redirect('back')
    } else {
        res.redirect('/login')
    }
})

function isLogged(req){
    const authToken = req.cookies['AuthToken'];
    return authTokens[authToken] ? true : false
}

module.exports = router