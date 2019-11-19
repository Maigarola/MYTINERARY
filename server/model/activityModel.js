const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    cityId: {
        type: String,
        required: true
    },
    itineraryId: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('activity', activitySchema)