import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer";
import { newContactMail } from "./mail";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER_HOST,
  port: Number(process.env.SMTP_SERVER_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()
    try {
      await newContactMail(name, email, subject, message)
    } catch (error) {
      console.error("Send api failed with error: ", error)
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
