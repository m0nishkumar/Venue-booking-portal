const mongoose = require('mongoose');

const bookschema= new mongoose.Schema({
    date: { type: String, required: true },
    time: [{ type: String, required: true }],
    purpose:{type:String,required:true},
    name:{type:String,default:"monish kumar"}
})
const eventSchema = new mongoose.Schema({
    venue: { type: String, required: true },  
    booked: { type: Boolean, default: false },
    type: { type: String, required: true },
    bookedDetails:[{
        type:bookschema,
        required:true
    }]
});



const Event = mongoose.model('Event', eventSchema);

module.exports = Event;