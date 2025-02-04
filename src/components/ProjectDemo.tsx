"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function ProjectDemo() {
  const [text, setText] = useState("")
  const fullText =
    "Our AI-powered MLB Prospect Prediction platform analyzes player performance, scouting reports, and video footage to forecast future stars."

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) clearInterval(typingInterval)
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="bg-gray-100 py-16 h-[50vh]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="h-96 relative aspect-video">
            <iframe
              src="https://youtu.be/S2vdln9QGLU"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4 text-blue-900"
            >
              Project Demo
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-700"
            >
              {text}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}

