import { Card } from "@/components/ui/card"
import { Brain, Video, Database, BarChartIcon as ChartBar } from "lucide-react"

export default function ProjectFeatures() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Using Gemini API for advanced natural language processing and player analysis",
    },
    {
      icon: Video,
      title: "Video Processing",
      description: "Analyze game footage and player mechanics using computer vision",
    },
    {
      icon: Database,
      title: "MLB Data Integration",
      description: "Access comprehensive MLB statistics and player data",
    },
    {
      icon: ChartBar,
      title: "Predictive Modeling",
      description: "Advanced statistical analysis using Google Cloud Vertex AI",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <Card key={index} className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
          <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </Card>
      ))}
    </div>
  )
}

