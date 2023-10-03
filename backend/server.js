const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

//PORT
const port = process.env.PORT || 8000;


//app
const app = express();

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors())

//routes

app.get('/', (req, res) => {

    res.json("Server is up and running")
})

app.get('/api', (req, res) => {
    res.json({ time: Date().toString() });
});



app.listen(port, () => {
    console.log(`server is up and running on port  ${port}`)
})