"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Reunión de Oración y Estudio Bíblico",
    date: "2025-01-19",
    time: "20:00 AM",
    location: "Av. Almirante Brown C/ Av. Jauretche",
    attendees: 150,
    type: "estudio",
    description: "Estudio Bíblicos, Alabanzas de adoración y tiempo de oración.",
  },
  {
    id: 2,
    title: "Reunión de Predicación y Santa Cena",
    date: "2025-01-22",
    time: "9:00 AM",
    location: "Av. Almirante Brown C/ Av. Jauretche",
    attendees: 45,
    type: "estudio",
    description: "Profundizando en la Palabra",
  },
  {
    id: 3,
    title: "Escuela Dominical",
    date: "2025-01-24",
    time: "5:30 PM",
    location: "Av. Almirante Brown C/ Av. Jauretche",
    attendees: 30,
    type: "jovenes",
    description: "Adoración y enseñanza para jóvenes",
  },
  {
    id: 4,
    title: "Retiro Espiritual",
    date: "2025-02-01",
    time: "9:00 AM",
    location: "Centro de Retiros",
    attendees: 80,
    type: "especial",
    description: "Fin de semana de renovación espiritual",
  },
]

export function EventsCalendar() {
  const [selectedType, setSelectedType] = useState("todos")

  const filteredEvents = selectedType === "todos" ? events : events.filter((event) => event.type === selectedType)

  const getEventColor = (type: string) => {
    switch (type) {
      case "servicio":
        return "bg-primary text-primary-foreground"
      case "estudio":
        return "bg-secondary text-secondary-foreground"
      case "jovenes":
        return "bg-accent text-accent-foreground"
      case "especial":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-card text-card-foreground"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedType === "todos" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedType("todos")}
        >
          Todos
        </Button>
        <Button
          variant={selectedType === "servicio" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedType("servicio")}
        >
          Servicios
        </Button>
        <Button
          variant={selectedType === "estudio" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedType("estudio")}
        >
          Estudios
        </Button>
        <Button
          variant={selectedType === "jovenes" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedType("jovenes")}
        >
          Jóvenes
        </Button>
        <Button
          variant={selectedType === "especial" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedType("especial")}
        >
          Especiales
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredEvents.map((event) => (
          <Card key={event.id} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${getEventColor(event.type)}`}>
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </div>
              <Calendar className="w-5 h-5 text-muted-foreground" />
            </div>

            <h3 className="font-semibold text-lg mb-2 text-card-foreground">{event.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{event.description}</p>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(event.date).toLocaleDateString("es-ES", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>{event.attendees} asistentes esperados</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
