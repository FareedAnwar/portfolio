import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "AI-Powered Dynamic Database Chatbot",
    description:
      "Developed an intelligent chatbot that allows users to query databases using natural language. The system ingests database schema descriptions, generates embeddings, and stores them in a vector database for semantic search.",
    features: [
      "Natural language to SQL generation",
      "Real-time query execution on SQL Server",
      "Vector database integration with embeddings",
      "OpenAI LLM API integration",
      "Automated NL → SQL → Execution → Answer workflow",
    ],
    technologies: ["Python", "OpenAI API", "Vector Database", "SQL Server", "pyodbc", "NLP"],
    metrics: "Enables fully automated database querying through natural language",
  },
  {
    title: "Smart FAQ System",
    description:
      "Implemented FAQ automation with Hugging Face + FAISS embeddings, deployed with Google PaLM API for intelligent question answering.",
    features: [
      "Semantic similarity matching",
      "FAISS vector indexing",
      "Google PaLM API integration",
      "Automated response generation",
    ],
    technologies: ["Hugging Face", "FAISS", "Google PaLM API", "Python", "NLP"],
    metrics: "Reduced customer support response time by 40%",
  },
  {
    title: "Hadith Semantic Similarity Search",
    description:
      "Applied AraBERT embeddings + cosine similarity for semantic search on Islamic texts, enabling accurate retrieval of relevant religious content.",
    features: [
      "Arabic text processing",
      "AraBERT embeddings",
      "Cosine similarity ranking",
      "Semantic search capabilities",
    ],
    technologies: ["AraBERT", "Python", "Transformers", "Arabic NLP", "Cosine Similarity"],
    metrics: "Achieved 87% F1-score in semantic similarity ranking",
  },
  {
    title: "Text Summarization using Transformers",
    description:
      "Implemented abstractive text summarization using BART and T5 models. Covered complete pipeline from dataset cleaning to deployment.",
    features: [
      "Abstractive summarization",
      "Dataset preprocessing",
      "Model fine-tuning",
      "Interactive demo deployment",
    ],
    technologies: ["BART", "T5", "Transformers", "PyTorch", "Hugging Face", "Python"],
    metrics: "Production-ready summarization system with interactive interface",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Showcase of AI and machine learning projects demonstrating expertise in LLMs, NLP, and intelligent systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4 p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm font-medium text-accent">{project.metrics}</p>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
