"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Plus, Minus } from "lucide-react"

interface ExpandableCardProps {
  title: string
  content: string
  defaultExpanded?: boolean
}

export function ExpandableCard({ title, content, defaultExpanded = false }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <Card className="p-6 text-left hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <h3 className="font-semibold text-gray-900 pr-4">{title}</h3>
        <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
          {isExpanded ? <Minus className="w-4 h-4 text-black" /> : <Plus className="w-4 h-4 text-black" />}
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96 mt-4" : "max-h-0"}`}>
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </div>
    </Card>
  )
}
