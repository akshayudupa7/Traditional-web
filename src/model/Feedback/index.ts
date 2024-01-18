import mongoose from "mongoose";

const FeedBackSchema=new mongoose.Schema({
       name:String,
       mobile:Number,
       email:String,
       question:String

})

const Feedback=mongoose.models.Feedbacks || mongoose.model("Feedbacks",FeedBackSchema)

export default Feedback