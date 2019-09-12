const express = require('express')
const app = express()
const port = 3000
const authRouter = require('./routes/auth')

//app.use('/api/user', authRouter)
app.use('/api/user', authRouter)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})