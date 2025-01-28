import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function PopularAnalysis() {
  const analyses = [
    {
      title: "Top Pitching Prospects 2024",
      image: "/placeholder.svg?height=200&width=400",
      date: "Jan 28, 2024",
    },
    {
      title: "Breaking Down Batting Mechanics",
      image: "/placeholder.svg?height=200&width=400",
      date: "Jan 27, 2024",
    },
    {
      title: "Future All-Stars Prediction",
      image: "/placeholder.svg?height=200&width=400",
      date: "Jan 26, 2024",
    },
  ]

  return (
    <Card className="p-6 bg-white shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Popular Analysis</h2>
      <div className="space-y-6">
        {analyses.map((analysis, index) => (
          <div key={index} className="group cursor-pointer">
            <Image
              src={analysis.image || "/placeholder.svg"}
              alt={analysis.title}
              width={400}
              height={200}
              className="rounded-lg mb-2 w-full"
            />
            <h3 className="font-semibold group-hover:text-blue-600 transition-colors">{analysis.title}</h3>
            <p className="text-sm text-gray-500">{analysis.date}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}

