const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true

    },
    hastag: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('city', citySchema)