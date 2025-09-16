"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F7F7F7] via-[#FFB22C]/10 to-[#854836]/20 animate-gradient">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FFB22C]/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFB22C] to-[#854836] rounded-2xl blur-xl opacity-30 animate-pulse-glow"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                <Image
                  src="/portfolio/static/images/fareed-profile.jpg"
                  alt="Fareed Ali Anwar - AI Engineer"
                  width={500}
                  height={600}
                  className="rounded-xl object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left animate-slide-in-right">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-[#854836] to-[#FFB22C] bg-clip-text text-transparent animate-gradient">
                Fareed Ali Anwar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl text-pretty">
              Junior AI Engineer specializing in{" "}
              <span className="text-[#854836] font-semibold">Large Language Models</span>,{" "}
              <span className="text-[#854836] font-semibold">RAG Systems</span>, and{" "}
              <span className="text-[#854836] font-semibold">Computer Vision</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FFB22C] to-[#854836] hover:from-[#854836] hover:to-[#FFB22C] text-black hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#854836] text-[#854836] hover:bg-[#854836] hover:text-white transition-all duration-300 bg-transparent"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://linkedin.com/in/fareed-ali-a2457a287"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-[#854836] transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/FareedAnwar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-[#854836] transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:anwrfryd8@gmail.com"
                className="text-foreground/60 hover:text-[#854836] transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 bg-gradient-to-r from-[#FFB22C]/20 to-[#854836]/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-32 h-32 bg-gradient-to-r from-[#854836]/20 to-[#FFB22C]/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute top-1/2 left-1/4 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-16 h-16 bg-gradient-to-r from-[#FFB22C]/15 to-transparent rounded-full blur-lg"></div>
      </div>
    </section>
  )
}
