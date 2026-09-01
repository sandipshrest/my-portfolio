import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { portfolioContext } from "@/data/portfolioContext";

const MODEL_NAME = "gemini-3.6-flash";

export async function POST(req) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("GEMINI_API_KEY is not set");

    return NextResponse.json(
      { error: "Server configuration error: API key not set" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { messages } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey,
    });

    const firstUserIndex = messages.findIndex(
      (message) => message.role === "user"
    );

    const historyMessages =
      firstUserIndex >= 0 ? messages.slice(firstUserIndex, -1) : [];

    const contents = historyMessages.map((message) => ({
      role: message.role === "assistant" ? "model" : "user",
      parts: [
        {
          text: message.content,
        },
      ],
    }));

    const lastMessage = messages[messages.length - 1];

    if (!lastMessage || lastMessage.role !== "user") {
      return NextResponse.json(
        { error: "Last message must be from user" },
        { status: 400 }
      );
    }

    contents.push({
      role: "user",
      parts: [
        {
          text: lastMessage.content,
        },
      ],
    });

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents,
      config: {
        systemInstruction: portfolioContext,
      },
    });

    return NextResponse.json({
      output: response.text,
    });
  } catch (error) {
    console.error("Gemini API Error:", error);

    return NextResponse.json(
      {
        error: error?.message || "Failed to get response",
      },
      { status: 500 }
    );
  }
}