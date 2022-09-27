const mongoose = require('mongoose')

const Schema = mongoose.Schema


const ModelSchema = new Schema({
    name: {type: String, required: true},
    data: { type: Boolean, default: false},
    
})

module.exports = mongoose.model('LojaDeProdutos', ModelSchema)