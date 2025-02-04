import Image from "next/image"
import { Card } from "@/components/ui/card"

const news = [
  {
    title: "The HR trot that should be seen 'round the world",
    image: "/placeholder.svg",
  },
  {
    title: "10 up-and-comers looking to extend small-sample success",
    image: "/placeholder.svg",
  },
  {
    title: "These are the best tools on the new Top 100 Prospects list",
    image: "/placeholder.svg",
  },
]

export default function LatestNews() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Latest News</h2>
      <div className="space-y-4">
        {news.map((item, index) => (
          <div key={index} className="flex gap-4 items-center">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="rounded-md object-cover" />
            </div>
            <h3 className="font-semibold hover:text-blue-600 cursor-pointer">{item.title}</h3>
          </div>
        ))}
      </div>
    </Card>
  )
}

