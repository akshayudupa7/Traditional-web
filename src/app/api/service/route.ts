import ConnectToDb from "@/database";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Service from "@/model/service";
export async function GET() {
  try {
    await ConnectToDb();
    const extractEvent = await Service.find({});

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
