import ConnectToDb from "@/database";
import Feedback from "@/model/Feedback";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req:Request){

    try{
        await ConnectToDb()
         const data=await req.json()
           
         const feed =await Feedback.create(data)
   
         if(feed){
            return NextResponse.json({
                success: true,
                message:'successfully posted feedback'
              });
         }else{
            return NextResponse.json({
                success: false,
                message:'could not post feedback'
              });
         }
      

    }catch(error){
        console.log(error)
        return NextResponse.json({
            success: false,
            message:error
          });
    }
}