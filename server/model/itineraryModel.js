const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    cityid:{
        type: String,
        required:true
    },
    title: {
        type: String,
        required: true,
           },
    img: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    duration:{
        type: Number,
        required: true,

    },
    price:{
        type: String,
        required: true,

    },
    hastag:{
        type: Array,
        required: true,

    }
})

module.exports = mongoose.model('itinerary', itinerarySchema)