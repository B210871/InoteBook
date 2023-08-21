const  connectToMongo = require("./db.js");
  
const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000;


app.use(cors())

app.use(express.json())
// Available Routes

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Inotebook Backend listening on port ${port}`)
})
connectToMongo();