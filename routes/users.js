const router = require('express').Router()
const db = require('../db/index')

router.post('/register', (req, res) => {
    // Check if user exists
    db('users')
    .where('email', req.body.email)
    .first('email')
    .then(rows => {
        // User not exists
        if (!rows) {
            // Create user
            db('users').insert({
                email: req.body.email,
                password: req.body.password,
                name: req.body.name
            })
            .then((id) => {
                res.send(`Register user with ${id}`)
            })
            .catch((err) => {
                res.send(err)
            })
        }
        // User already exists
        else {
            res.send(`User with email ${rows.email} already exists`)    
        }
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
})

router.post('/login', () => {
    
})

module.exports = router