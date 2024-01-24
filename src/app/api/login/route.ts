import ConnectToDb from "@/database";
import User from "@/model/user";
import { compare } from "bcryptjs";
import Joi from "joi";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const schema = Joi.object({
  mobile: Joi.number().required(),
  password: Joi.string().required(),
});
export async function POST(req: Request) {
  await ConnectToDb();

  const { mobile, password } = await req.json();

  const { error } = schema.validate({ mobile, password });
  if (error) {
    return NextResponse.json({
      success: false,
      message: error.details[0].message,
      error,
    });
  }
  try {
    const checkuser = await User.findOne({ mobile });
    if (!checkuser) {
      return NextResponse.json({
        success: false,
        message: "user does not exist",
      });
    }

    const checkpassword = await compare(password, checkuser.password);

    if (!checkpassword) {
      return NextResponse.json({
        success: false,
        message: "password is not matching",
      });
    }

    const token = jwt.sign(
      {
        id: checkuser._id,
        mobile: checkuser.mobile,
        password: checkuser.password,
      
      },
      "default_secret_key",
      { expiresIn: "1d" }
    );

    const finalData = {
      token,
      user: {
        mobile: checkuser.mobile,
        password: checkuser.password,
        id: checkuser._id,
      },
    };
    return NextResponse.json({
      success: true,
      message: "Login successfull!",
      finalData,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "something went wrong",
    });
  }
}