"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "María González",
    role: "Miembro desde 2018",
    content:
      "Esta iglesia ha sido mi hogar espiritual. La enseñanza bíblica sólida y el amor de la comunidad han transformado mi vida completamente.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Carlos Rodríguez",
    role: "Líder de jóvenes",
    content:
      "Encontré mi propósito sirviendo en esta iglesia. El liderazgo pastoral nos guía con sabiduría y amor genuino hacia Cristo.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Ana Martínez",
    role: "Miembro desde 2020",
    content:
      "La comunidad aquí es increíble. Hemos crecido juntos en fe y nos apoyamos mutuamente en cada temporada de la vida.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="relative">
      <Card className="bg-card p-8 shadow-xl">
        <div className="flex items-start space-x-4">
          <Quote className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
          <div className="flex-1">
            <p className="text-card-foreground text-lg mb-6 leading-relaxed font-serif">
              "{testimonials[current].content}"
            </p>
            <div className="flex items-center space-x-3">
              <img
                src={testimonials[current].image || "/placeholder.svg"}
                alt={testimonials[current].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-card-foreground">{testimonials[current].name}</p>
                <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="flex justify-center items-center space-x-4 mt-6">
        <Button variant="outline" size="sm" onClick={prev} className="rounded-full bg-transparent">
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-colors ${index === current ? "bg-primary" : "bg-muted"}`}
            />
          ))}
        </div>
        <Button variant="outline" size="sm" onClick={next} className="rounded-full bg-transparent">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
