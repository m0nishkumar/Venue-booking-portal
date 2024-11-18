const mongoose = require('mongoose');

const loginschema= new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password:{type:String,required:true},
})

const Login = mongoose.model('Login', loginschema);
module.exports = Login;