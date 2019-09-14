const router = require('express').Router()
const db = require('../db/index')

router.post('/register', (req, res) => {
    console.log(req)
    db('users').insert({name: req.body.name, email: req.body.email, password: req.body.password})
    .then((id) => {
        res.send(`Register user with ${id}`)
    })
    .catch((err) => {
        res.send(err)
    })
    .finally(() => {
        db.destroy()
    })       
})

module.exports = router