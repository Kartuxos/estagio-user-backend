const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: false },
    foneNumber: { type: String, required: true },
    city: { type: String, required: true },
    bairro: { type: String, required: true },
    rua: { type: String, required: true },
    number: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }

})

module.exports = mongoose.model('User', userSchema);