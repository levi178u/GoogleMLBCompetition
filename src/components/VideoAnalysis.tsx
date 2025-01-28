"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function VideoAnalysis() {
  const [videoUrl, setVideoUrl] = useState("")
  const [prompt, setPrompt] = useState("")

  return (
    <Card className="p-6 bg-white shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Video Analysis</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Video URL</label>
          <Input
            type="text"
            placeholder="Enter MLB video URL"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        </div>

        {videoUrl && (
          <div className="aspect-w-16 aspect-h-9">
            <iframe src={videoUrl} className="w-full h-full rounded-lg" allowFullScreen />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-2">Analysis Prompt</label>
          <Textarea
            placeholder="What would you like to analyze about this player?"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
          />
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700">Analyze Video</Button>
      </div>
    </Card>
  )
}

