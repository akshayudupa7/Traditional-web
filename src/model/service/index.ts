import mongoose from "mongoose";

const ServiceSchema=new mongoose.Schema({
       name:String,
       images:String,
       description:String

})

const Service=mongoose.models.Services || mongoose.model("Services",ServiceSchema)

export default Service