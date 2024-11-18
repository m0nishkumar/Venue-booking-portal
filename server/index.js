const express=require("express")
const mongoose=require("mongoose")
const Event = require('./models/Event');
const cors = require('cors');
const Admin =require('./models/Admin');
const Status=require('./models/Status.js')
const CsEvent=require('./models/Csevents.js');
const Csevents = require("./models/Csevents.js");
const Login=require("./models/Login.js");

const app=express()
app.use(cors());
app.use(express.json()); 
mongoose.connect('mongodb://localhost:27017/venue')
.then(()=>{
    console.log("Connected to the DB")
})
app.get("/getclass",async(req,res)=>{
    try{
        const result=await CsEvent.find({});
        console.log(result)
        res.json(result)
    }
    catch(error){
        console.error(error)
    }
})
app.post("/register",async(req,res)=>{
    const {name,password,email}=req.body;
    try{
        const newEvent=new Login({
            name,
            email,password
        })
    await newEvent.save();
    res.json({});
    }catch(error){
        console.error(error);
    }
})

app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const result=await Login.findOne({email:email})
        if(result.email==email && result.password==password){
            res.json(result);
        }else{
            res.send("failed");
        }
    }catch(error){
        console.log(error)
    }
})

app.post("/createEvent",async(req,res)=>{
    console.log(req.body)
    try {
        const { venue,bookedDetails, booked,type } = req.body;
        const newEvent = new Event({
          venue,
          bookedDetails,
          booked,
          type
        });
    
        await newEvent.save();
    
        res.status(200).send("Event saved successfully");
      } catch (error) {
        console.error("Error saving event:", error);
        res.status(500).send("Error saving event");
      }
})
app.get("/getvenue",async(req,res)=>{
    const venues=await Event.find({});
    res.json(venues);
})

app.get("/getadmin",async(req,res)=>{
    const venues=await Admin.find({});
    res.json(venues);
})

app.post("/bookvenue",async(req,res)=>{
    const { _id,id,venue,date,time,purpose,name } = req.body;
    try{
        const result=await Event.findById(id);
        console.log(_id)
        const updatedVenue = await Status.findOneAndUpdate({aid:_id}, {status:"Accepted" }, { new: true });
        const del=await Admin.deleteOne({_id:_id});
        console.log(updatedVenue)
        result.bookedDetails.push({date:date,time:time,purpose:purpose,name:name})
        result.save();
        
    }catch(error){
        console.log(error)
    }
    console.log("done")
    res.json({})
})
app.post("/bookvenueclass",async(req,res)=>{
    const { _id,id,venue,date,time,purpose,name } = req.body;
    try{
        const result=await Csevents.findById(id);
        console.log(_id)
        const updatedVenue = await Status.findOneAndUpdate({aid:_id}, {status:"Accepted" }, { new: true });
        const del=await Admin.deleteOne({_id:_id});
        console.log(updatedVenue)
        result.bookedDetails.push({date:date,time:time,purpose:purpose,name:name})
        result.save();
    }catch(error){
        console.log(error)
    }
    console.log("done")
    res.json({})
})

app.get("/getstatus",async(req,res)=>{
    try{
        const result=await Status.find({});
        res.json(result);
    }catch(error){
        console.error(error);
    }
})
app.post("/reject",async(req,res)=>{
    try{
        const _id=req.body._id
        
        console.log("rejects",_id)
        const del=await Admin.deleteOne({_id:_id});
        const updatedVenue = await Status.findOneAndUpdate({aid:_id}, {status:"Rejected" }, { new: true });
        console.log(updatedVenue)
    }catch(error){
        console.error(error)
    }
    res.json({})
})

app.post("/admin",async(req,res)=>{
    const { _id,venue, bookedDetails, booked,type } = req.body;
    const a=bookedDetails[0];
    const {date,time,purpose,name}=a;
    const id=_id;
    try{
        const newEvent = new Admin({
            date,
            time,
            purpose,
            name,
            type,
            id,
            venue
          });
          console.log(newEvent._id);
        const aid=newEvent._id
        const newStatus=new Status({
            aid,
            time,
            purpose,name,venue,date,status:"Pending"
        })
        await newStatus.save();
        await newEvent.save();
    }catch(error){
        console.log(error)
    }
})


app.listen(3001,()=>{
    console.log("Listening in port 3001")
})