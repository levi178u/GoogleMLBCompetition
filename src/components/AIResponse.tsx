import { Card } from "@/components/ui/card"

interface AIResponseProps {
  response: string
}

export default function AIResponse({ response }: AIResponseProps) {
  return (
    <Card className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-blue-800">AI Analysis Results</h2>
      <div className="prose max-w-none">
        <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">{response}</pre>
      </div>
    </Card>
  )
}

