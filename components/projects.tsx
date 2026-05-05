import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Arabic Medical GraphRAG",
    description:
      "Developed an advanced RAG system combining Neo4j knowledge graphs and Qdrant vector search to reduce hallucinations in Arabic medical queries.",
    features: [
      "Built hybrid retrieval across graph and vector stores",
      "Implemented semantic caching to reduce latency and API cost",
      "Created production-ready FastAPI backend",
      "Integrated multiple LLM providers including Gemini and Cohere",
      "Dockerized the full stack for scalable deployment",
    ],
    technologies: ["Python", "FastAPI", "Neo4j", "Qdrant", "Gemini", "Cohere", "Docker", "RAG"],
    metrics: "Improved answer grounding and reduced LLM latency/cost with hybrid retrieval + caching",
  },
  {
    title: "AI-Powered Dynamic Database Chatbot (SQL Generation & Execution)",
    description:
      "Designed and developed an AI chatbot that converts natural language questions into executable SQL queries for real-time database insights.",
    features: [
      "Implemented natural language to SQL generation pipeline",
      "Built embedding-based schema search for relevant tables and fields",
      "Executed generated SQL in real time using SQL Server + pyodbc",
      "Enabled non-technical users to access database answers automatically",
    ],
    technologies: ["Python", "OpenAI", "SQL Server", "pyodbc", "Embeddings", "NLP"],
    metrics: "Delivered automated NL -> SQL -> execution workflow for efficient self-service analytics",
  },
  {
    title: "Hadith Books Search System using RAG",
    description:
      "Built an intelligent RAG search system for Hadith books with vector retrieval and LLM-generated summaries/explanations.",
    features: [
      "Integrated Pinecone for semantic vector search and retrieval",
      "Used Qwen to generate summaries and explanations",
      "Combined embedding retrieval with LLM response generation",
      "Handled data preparation, indexing, querying, and summarization",
    ],
    technologies: ["Python", "RAG", "Pinecone", "Qwen", "Embeddings", "Semantic Search"],
    metrics: "Improved Hadith search relevance through retrieval-augmented semantic understanding",
  },
  {
    title: "Legal AI Assistant",
    description:
      "Built an API-based Arabic legal QA assistant over PDF documents across multiple legal domains with grounded answer retrieval.",
    features: [
      "Designed hybrid extraction with direct PDF parsing + OCR fallback",
      "Implemented chunking and retrieval with source-referenced answers",
      "Improved robustness for noisy Arabic OCR and inconsistent formatting",
      "Built preprocessing, embeddings, semantic search, and traceability flow",
    ],
    technologies: ["Python", "API", "OCR", "PDF Parsing", "Embeddings", "Semantic Search", "Arabic NLP"],
    metrics: "Delivered grounded legal QA with improved document handling and answer traceability",
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
