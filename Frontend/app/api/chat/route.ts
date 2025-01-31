import { GoogleGenerativeAI } from "@google/generative-ai"
import { GoogleGenerativeAIStream, type Message, StreamingTextResponse } from "ai"

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || "")

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    const systemPrompt = {
      role: "system",
      content:
        "You are Nexa, an empathetic AI mental health assistant. Always respond with compassion and understanding. If users express severe distress or suicidal thoughts, encourage them to seek professional help and provide emergency contact information. Start the conversation in a warm, welcoming manner.",
    }

    const formattedMessages = messages.map((message: Message) => ({
      role: message.role,
      content: message.content,
    }))

    const chat = model.startChat({
      history: [systemPrompt, ...formattedMessages],
      generationConfig: {
        maxOutputTokens: 1000,
      },
    })

    const response = await chat.sendMessageStream(messages[messages.length - 1].content)

    const stream = GoogleGenerativeAIStream(response)

    return new StreamingTextResponse(stream)
  } catch (error) {
    console.error("Chat API Error:", error)
    return new Response("Error processing chat request", { status: 500 })
  }
}

