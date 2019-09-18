const router = require('express').Router()
const bcrypt = require('bcrypt')
const db = require('../db/index')

router.post('/register', async (req, res) => {
    // Check if user exists
    const userExists = await db('users')
    .where('email', req.body.email)
    .first('email')
    .then((rows) => {
        console.log('Return rows')
        return rows
    })
    .catch((err) => {
        return res.status(500).send(err)
    })

    if (userExists) {
        console.log('emailExists: ' + userExists.email)
        return res.status(400).send(`User with email ${userExists.email} already exists`)
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    // Create user
    await db('users').insert({
        email: req.body.email,
        password: hashedPassword,
        name: req.body.name
    })
    .then((id) => {
        console.log('return id')
        return res.send(`Register user with ${id}`)
    })
    .catch((err) => {
        return res.status(500).send(err)
    })

    console.log('Something here')
    // db('users')
    // .where('email', req.body.email)
    // .first('email')
    // .then(rows => {
    //     // User not exists
    //     if (!rows) {
    //         // Create user
    //         db('users').insert({
    //             email: req.body.email,
    //             password: req.body.password,
    //             name: req.body.name
    //         })
    //         .then((id) => {
    //             res.send(`Register user with ${id}`)
    //         })
    //         .catch((err) => {
    //             res.send(err)
    //         })
    //     }
    //     // User already exists
    //     else {
    //         res.send(`User with email ${rows.email} already exists`)    
    //     }
    // })
    // .catch(err => {
    //     console.log(err)
    //     res.send(err)
    // })
})

router.post('/login', () => {
    
})

module.exports = router