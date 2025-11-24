import nodemailer from "nodemailer";
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    const { emailContact, bodyMsg } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.SEND_FROM,
      subject: `New client from portfolio: ${emailContact}`,
      text: bodyMsg,
    });

    return NextResponse.json({ status: "ok" }, { status: 200 });

  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}
