import mongoose from "mongoose";

const EventSchema=new mongoose.Schema({
       name:String,
       imageUrl:String,
       description:String,
       para:String,
       price:Number,
       help:String,
       icon:String
})

const Event=mongoose.models.Events || mongoose.model("Events",EventSchema)

export default Event