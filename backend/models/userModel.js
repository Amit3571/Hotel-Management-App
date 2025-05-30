//Schema of user:
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    country:{
        type: String,
        required: true,
    },
    img:{
        type: String,
    },
    city:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
},{timestamps:true});

// Collection of Users:
const UserCollection = mongoose.model('UserCollection',userSchema);

// Exporting the UserCollection:
module.exports = UserCollection;