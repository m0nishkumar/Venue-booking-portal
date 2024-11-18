const mongoose=require('mongoose')
const Schema = mongoose.Schema;

const statusschema=new mongoose.Schema({
    aid:{type:Schema.Types.ObjectId,required:true},
    date:{type:String,required:true},
    purpose:{type:String,required:true},
    name:{type:String,default:"monish kumar"},
    venue:{type:String,required:true},
    time:[{type:String,required:true}],
    status:{type:String,required:true}
})

const Status = mongoose.model('Status', statusschema);

module.exports = Status;