const mongoose = require('mongoose');

// Schema of Hotels:
const hotelSchema = mongoose.Schema({
    name: {
       type: String,
       required: true,
    },
    type:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    distance:{
        type: String,
        required: true,
    },
    photos:{
        type: [String],
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        min:0,
        max:5
    },
    rooms:{
        type: [String],
    },
    cheapestPrice:{
        type: Number,
        required: true,
    },
    featured:{
        type: Boolean,
        default: false,
    },
});

// Collection of Hotel:
const HotelCollection = mongoose.model('HotelCollection',hotelSchema);

// Export the HotelCollection:
module.exports = HotelCollection;