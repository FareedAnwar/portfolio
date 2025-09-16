import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Calendar } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Passionate AI Engineer with expertise in cutting-edge technologies and a proven track record of delivering
            scalable AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Career Objective</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Motivated Junior AI Engineer with hands-on experience in Large Language Models (LLMs), Retrieval-Augmented
              Generation (RAG), Computer Vision, and AI Agents. Proven ability to deliver scalable, measurable AI
              solutions with strong foundations in data science and software engineering.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Seeking to contribute to AI-driven product development in industries such as FinTech, SaaS, and
              Intelligent Automation.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">anwrfryd8@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">(+20) 101 288 6936</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Cairo, Egypt</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Available for opportunities</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Education</h3>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="font-semibold text-foreground">Bachelor of Computer Science</h4>
                  <p className="text-muted-foreground">El Shorouk Academy, Cairo, Egypt</p>
                </div>
                <div className="text-accent font-medium mt-2 md:mt-0">Oct 2022 – Oct 2026</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
