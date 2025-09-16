import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Junior NLP Engineer",
    company: "Dexef",
    location: "Remote",
    period: "Oct 2024 – Present",
    achievements: [
      "Developed and deployed 3+ LLM-powered applications using LangChain and RAG, improving query accuracy by 15%",
      "Designed semantic search pipelines leveraging vector databases, reducing query latency by 25%",
      "Fine-tuned Transformer models (BERT, GPT-based) achieving a 12% improvement in F1-score on internal NLP tasks",
      "Implemented NER pipelines and custom tokenizers, enabling real-time entity extraction from large datasets",
    ],
    skills: ["LangChain", "RAG", "Vector Databases", "BERT", "GPT", "NER", "Transformers"],
  },
]

const training = [
  {
    title: "Orange Digital Center – AI Bootcamp",
    period: "Nov 2024 – Jan 2025",
    type: "Training",
  },
  {
    title: "HCIA AI Training – NTI",
    period: "Aug 2024 – Oct 2024",
    type: "Training",
  },
]

const certifications = [
  "AI Diploma – Instant (Jan 2024 – Aug 2024)",
  "Large Language Models (LLM) – Udemy",
  "AI Agent Development – Udemy",
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Experience & Training</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Professional experience and continuous learning in AI and machine learning technologies.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{exp.title}</h4>
                      <p className="text-lg text-accent font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold text-foreground mb-2">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Training & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Training Programs</h3>
            <div className="space-y-4">
              {training.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{item.period}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <p className="text-foreground">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
