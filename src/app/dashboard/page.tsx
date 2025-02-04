"use client"

import { useState } from "react"
import VideoPlayer from "@/components/VideoPlayer"
import PromptInput from "@/components/PromptInput"
import AIResponse from "@/components/AIResponse"
import { Sidebar } from "@/components/Sidebar"

export default function Dashboard() {
  const [videoUrl, setVideoUrl] = useState("")
  const [prompt, setPrompt] = useState("")
  const [analysisType, setAnalysisType] = useState("general")
  const [aiResponse, setAiResponse] = useState("")
  const [isVideoSubmitted, setIsVideoSubmitted] = useState(false)
  const [history, setHistory] = useState<string[]>([])

  const handleVideoSubmit = (url: string) => {
    setVideoUrl(url)
    setIsVideoSubmitted(true)
  }

  const handlePromptSubmit = async (inputPrompt: string, inputAnalysisType: string, inputVideoUrl: string) => {
    setPrompt(inputPrompt)
    setAnalysisType(inputAnalysisType)
    setVideoUrl(inputVideoUrl)
    setIsVideoSubmitted(true)
    // Here you would typically call your AI service
    // For now, we'll just set a placeholder response
    const response = `AI ${inputAnalysisType} analysis for prompt: "${inputPrompt}" on video: ${inputVideoUrl}`
    setAiResponse(response)
    setHistory((prev) => [inputPrompt, ...prev])
  }

  const handleSelectPrompt = (selectedPrompt: string) => {
    setPrompt(selectedPrompt)
  }

  const handleNewExperience = () => {
    setVideoUrl("")
    setPrompt("")
    setAiResponse("")
    setIsVideoSubmitted(false)
  }

  return (
    <div className="flex">
      <Sidebar 
        history={history} 
        onSelectPrompt={handleSelectPrompt}
        onNewExperience={handleNewExperience}
      />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-900">Prospect Prediction Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <PromptInput onSubmit={handlePromptSubmit} initialVideoUrl={videoUrl} />
          </div>
          <div>
            <VideoPlayer 
              url={videoUrl} 
              onSubmit={handleVideoSubmit} 
              isVisible={isVideoSubmitted} 
            />
          </div>
        </div>
        {aiResponse && (
          <div className="mt-8">
            <AIResponse response={aiResponse} />
          </div>
        )}
      </div>
    </div>
  )
}
