import { NextResponse } from "next/server";
import { emailSubscribeUrl } from "../../../../env";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || typeof email !== "string" || !email.includes("@")) {
            return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
        }

        const response = await fetch(
            emailSubscribeUrl,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            }
        );

        // Handle non-JSON responses (Google Apps Script sometimes returns plain text)
        const text = await response.text();
        let result;
        try {
            result = JSON.parse(text);
        } catch (error) {
            console.error(error)
            result = { status: "success", message: text }; // Fallback if it's plain text
        }

        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error("Error: ", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
