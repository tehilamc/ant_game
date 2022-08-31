// const axios = require('axios').default;

// const express = require('express')
// const app = express()

// const PORT = process.env.PORT || 3001

// app.get("/");


// app.listen(PORT)
// console.log("server is listening in port 3001")

// app.use(express.static('static'))
// app.use('/', express.static('enter.html'))
// app.use(express.json())

const axios = require('axios').default;
const https = require('https');

const httpsAgent = new https.Agent({ rejectUnauthorized: false });
var counter;
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('static'))
app.use('/', express.static('enter.html'))

//const PORT = process.env.PORT||3001
app.listen(3001)


