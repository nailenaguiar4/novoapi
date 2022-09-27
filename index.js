const express = require('express')
const mongoose = require('mongoose');
const LojaDeProdutos = require('./models/LojaDeProdutos.js')
const dylines = require('./models/dylines.js')

const mongoUrl = 'mongodb+srv://nailenaguiar:nai412len@nailen.qlonvzm.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoUrl, {useNewUrlParser: true , useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB deu erro'));

const app = express()
const port = 4040

app.get('/', (req, res) => {
    res.send('ola equipe')
})

app.get('/informa', async (req, res) =>{
    const datos = await LojaDeProdutos.create({ name:'cafe'})
    res.json({datos})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })