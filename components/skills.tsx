import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Brain, Cloud, Wrench, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "C#"],
    color: "text-blue-500",
  },
  {
    title: "Data Analysis & Visualization",
    icon: Database,
    skills: ["SQL", "Power BI", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly"],
    color: "text-green-500",
  },
  {
    title: "Machine Learning & AI",
    icon: Brain,
    skills: [
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "Hugging Face Transformers",
      "LangChain",
      "SpaCy",
      "NLTK",
      "OpenCV",
      "YOLO",
    ],
    color: "text-purple-500",
  },
  {
    title: "MLOps & Deployment",
    icon: Wrench,
    skills: ["Docker", "Git/GitHub", "FastAPI", "Flask", "MLflow", "CI/CD Pipelines"],
    color: "text-orange-500",
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["Microsoft Azure", "AWS (SageMaker, Lambda)"],
    color: "text-cyan-500",
  },
  {
    title: "Advanced Concepts",
    icon: Brain,
    skills: ["Vector Databases", "Retrieval-Augmented Generation (RAG)", "LLM Fine-Tuning"],
    color: "text-red-500",
  },
]

const softSkills = [
  "Communication",
  "Leadership",
  "Time Management",
  "Problem Solving",
  "Critical Thinking",
  "Creativity",
  "Research",
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive expertise across the AI and machine learning technology stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <IconComponent className={`h-5 w-5 ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Users className="h-5 w-5 text-accent" />
              Soft Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
