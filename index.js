const express = require('express')
const app = express()
const port = 3000
const usersRouter = require('./routes/users')

app.use(express.json())
app.use('/api/user', usersRouter)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})