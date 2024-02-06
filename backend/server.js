const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const user = require('./routes/user')
const Usermsg = require('./routes/messages')

const connectmongo = require('./db/connect')

const cookieParser = require('cookie-parser')
const alluserRouter = require('./routes/globalusers')

const app = express()
app.use(cookieParser())
app.use(express.json())

app.use('/chat/api/v1', alluserRouter)
app.use('/chat/api/v1', user)
app.use('/chat/api/v1', Usermsg)

const port = process.env.PORT || 5000

app.listen(port, (req, res) => {
    connectmongo();
    console.log(`server is listening at port ${port}`);
})
