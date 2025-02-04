"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const players = [
  { name: "Shohei Ohtani", team: "LAD", image: "/placeholder.svg" },
  { name: "Aaron Judge", team: "NYY", image: "/placeholder.svg" },
  { name: "Juan Soto", team: "NYY", image: "/placeholder.svg" },
  { name: "Bryce Harper", team: "PHI", image: "/placeholder.svg" },
  // Add more players as needed
]

export default function PlayerCarousel() {
  return (
    <div className="relative">
      <h2 className="text-lg font-semibold mb-4">Follow Players</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {players.map((player) => (
          <div key={player.name} className="flex-none w-48">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="relative w-24 h-24 mx-auto mb-2">
                <Image
                  src={player.image || "/placeholder.svg"}
                  alt={player.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-semibold">{player.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{player.team}</p>
              <Button variant="outline" className="w-full">
                Follow
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

