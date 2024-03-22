import ConnectToDb from "@/database";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Event from "@/model/events";
export async function GET(req:any) {
  try {
    await ConnectToDb();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const extractEvent = await Event.find({ name: id });

    if (extractEvent) {
      return NextResponse.json({
        success: true,
        message: extractEvent,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "events details could not be fetched",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "something went wrong",
    });
  }
}
