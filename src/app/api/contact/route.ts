import emailjs from '@emailjs/nodejs';
import { error } from 'console';
import { NextResponse } from "next/server";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export async function POST(req: Request) {
    try {
        const body: ContactFormData = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All field are required" },
                { status: 400 }
            );
        }

        await emailjs.send(
            process.env.EMAILJS_SERVICE_ID!,
            process.env.EMAILJS_TEMPLATE_ID!,
            {
                from_name: name,
                from_email: email,
                message,
            },
            { publicKey: process.env.EMAILJS_PUBLIC_KEY! }
        );
        
        return NextResponse.json(
            { message: "Email sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
         console.error("EmailJS Error:", error);
    return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }
}