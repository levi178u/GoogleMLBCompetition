import Image from "next/image"
import { Card } from "@/components/ui/card"

const popularContent = [
  {
    title: "Pipeline's Top 100 Prospects",
    image: "/placeholder.svg",
    description: "See who made our list of baseball's best prospects",
  },
  {
    title: "The Top 10 right fielders in MLB",
    image: "/placeholder.svg",
    description: "Rankings of the best right fielders right now",
  },
  {
    title: "The best games of 2024",
    image: "/placeholder.svg",
    description: "Relive the most exciting moments of the season",
  },
]

export default function PopularSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Popular</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularContent.map((content, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative aspect-video">
              <Image src={content.image || "/placeholder.svg"} alt={content.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">{content.title}</h3>
              <p className="text-sm text-gray-600">{content.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

