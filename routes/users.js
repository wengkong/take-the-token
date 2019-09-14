const router = require('express').Router()
const db = require('../db/index')

router.post('/register', (req, res) => {
    db('users').insert({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
    })
    .then((id) => {
        res.send(`Register user with ${id}`)
    })
    .catch((err) => {
        console.log(err)
        res.send(err)
    })
})

module.exports = router