import { Inter } from "next/font/google"
import { Navbar } from "@/components/navbar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
  title: "Nexabot - Emotional Support Bot",
  description: "AI-powered emotional support chatbot and mental health platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Navbar />
        <main className="min-h-screen bg-background">{children}</main>
      </body>
    </html>
  )
}

