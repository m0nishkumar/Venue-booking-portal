const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminschema= new mongoose.Schema({
    date: { type: String, required: true },
    time: [{ type: String, required: true }],
    purpose:{type:String,required:true},
    name:{type:String,default:"monish kumar"},
    type:{type:String,required:true},
    id:{type:Schema.Types.ObjectId,required:true},
    venue:{type:String,required:true}
})

const Admin = mongoose.model('Admin', adminschema);

module.exports = Admin;