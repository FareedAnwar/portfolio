import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Star, Target } from "lucide-react"

const achievements = [
  {
    title: "First Place Winner – HCIA AI (NTI, 2024)",
    description: "Recognized for building top-ranked AI project during national training program.",
    icon: Trophy,
    color: "text-yellow-500",
    category: "Competition",
  },
  {
    title: "Kaggle Competitions – Top 0.1%",
    description:
      "Rank #69 / 61,800+ participants: Specialized in NLP and deep learning with multiple gold medal solutions.",
    icon: Medal,
    color: "text-purple-500",
    category: "Platform Achievement",
  },
]

const metrics = [
  {
    value: "15%",
    label: "Query Accuracy Improvement",
    description: "LLM-powered applications",
  },
  {
    value: "25%",
    label: "Query Latency Reduction",
    description: "Semantic search pipelines",
  },
  {
    value: "12%",
    label: "F1-Score Improvement",
    description: "Transformer model fine-tuning",
  },
  {
    value: "40%",
    label: "Response Time Reduction",
    description: "Smart FAQ system",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Achievements & Impact</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Recognition and measurable impact in AI competitions and professional projects.
          </p>
        </div>

        {/* Major Achievements */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent className={`h-6 w-6 ${achievement.color}`} />
                    <div>
                      <div className="text-lg">{achievement.title}</div>
                      <Badge variant="outline" className="mt-1">
                        {achievement.category}
                      </Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Performance Metrics */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Performance Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-2">
                    <Target className="h-5 w-5 text-brown mr-2" />
                    <span className="text-3xl font-bold text-brown">{metric.value}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{metric.label}</h4>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Recognition */}
        <div className="mt-16 text-center">
          <Card className="inline-block">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-lg font-semibold text-foreground">Kaggle Profile</span>
              </div>
              <p className="text-muted-foreground mb-3">
                Active contributor with expertise in NLP and deep learning competitions
              </p>
              <a
                href="https://kaggle.com/fareedalianwar/code"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown hover:underline font-medium"
              >
                View Kaggle Profile →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
