import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

interface SidebarProps {
  history: string[]
  onSelectPrompt: (prompt: string) => void
  onNewExperience: () => void
}

export function Sidebar({ history, onSelectPrompt, onNewExperience }: SidebarProps) {
  return (
    <div className="w-64 bg-gray-300 p-4 border-r border-gray-400 h-screen">
      <Button variant="outline" className="w-full mb-4 rounded-sm" onClick={onNewExperience}>
        <PlusCircle className="mr-2 h-4 w-4" /> New Experience
      </Button>
      <h2 className="text-lg font-semibold mb-2">History</h2>
      <ScrollArea className="h-[calc(100vh-120px)]">
        {history.map((prompt, index) => (
          <Button
            key={index}
            variant="ghost"
            className="w-full justify-start mb-2 text-left"
            onClick={() => onSelectPrompt(prompt)}
          >
            {prompt.length > 30 ? prompt.substring(0, 30) + "..." : prompt}
          </Button>
        ))}
      </ScrollArea>
    </div>
  )
}

