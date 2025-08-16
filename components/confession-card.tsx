"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

interface ConfessionCardProps {
  title: string
  content: string
}

export function ConfessionCard({ title, content }: ConfessionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card
      className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-card-foreground pr-4">{title}</h3>
        <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-primary" />
          ) : (
            <ChevronDown className="w-5 h-5 text-primary" />
          )}
        </div>
      </div>
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-muted-foreground font-serif leading-relaxed">{content}</p>
        </div>
      )}
    </Card>
  )
}
