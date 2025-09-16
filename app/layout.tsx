import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Fareed Ali Anwar - AI Engineer Portfolio",
  description:
    "Junior AI Engineer specializing in LLMs, RAG, Computer Vision, and AI Agents. Experienced in NLP, machine learning, and scalable AI solutions.",
  generator: "v0.app",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "NLP",
    "LLM",
    "RAG",
    "Computer Vision",
    "Python",
    "TensorFlow",
    "PyTorch",
  ],
  authors: [{ name: "Fareed Ali Anwar" }],
  openGraph: {
    title: "Fareed Ali Anwar - AI Engineer Portfolio",
    description: "Junior AI Engineer specializing in LLMs, RAG, Computer Vision, and AI Agents",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
