const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        maxlength:32,
        minlength:6,
        required:true
    }
});

mongoose.model('User',UserSchema);