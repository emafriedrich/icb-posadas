import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, ArrowLeft, Play } from "lucide-react"
import { notFound } from "next/navigation"

// Datos de ejemplo - en una aplicación real esto vendría de una base de datos
const cancionesPorFecha = {
  "miercoles-13": {
    fecha: "Miércoles 13",
    fechaCompleta: "Miércoles 13 de Noviembre, 2024",
    tipo: "Estudio Bíblico",
    canciones: [
      { id: 1, titulo: "Cuán Grande es Él", artista: "Himno Tradicional", duracion: "4:32" },
      { id: 2, titulo: "Amazing Grace", artista: "John Newton", duracion: "3:45" },
      { id: 3, titulo: "Sublime Gracia", artista: "Versión en Español", duracion: "4:12" },
      { id: 4, titulo: "Al Cristo Vivo Sirvo", artista: "Himno Tradicional", duracion: "3:28" },
    ],
  },
  "domingo-10": {
    fecha: "Domingo 10",
    fechaCompleta: "Domingo 10 de Noviembre, 2024",
    tipo: "Servicio Principal",
    canciones: [
      { id: 5, titulo: "Santo, Santo, Santo", artista: "Reginald Heber", duracion: "5:15" },
      { id: 6, titulo: "Jesús es el Señor", artista: "Canto Moderno", duracion: "4:20" },
      { id: 7, titulo: "Te Exaltamos", artista: "Alabanza Contemporánea", duracion: "3:55" },
      { id: 8, titulo: "Digno es el Cordero", artista: "Hillsong", duracion: "6:10" },
      { id: 9, titulo: "Renuévame", artista: "Marcela Gándara", duracion: "4:45" },
    ],
  },
  "miercoles-6": {
    fecha: "Miércoles 6",
    fechaCompleta: "Miércoles 6 de Noviembre, 2024",
    tipo: "Estudio Bíblico",
    canciones: [
      { id: 10, titulo: "Cerca de Ti", artista: "Fanny Crosby", duracion: "3:30" },
      { id: 11, titulo: "Tal Como Soy", artista: "Charlotte Elliott", duracion: "4:05" },
      { id: 12, titulo: "En Cristo Hallo Amigo", artista: "Himno Tradicional", duracion: "3:50" },
    ],
  },
  "domingo-3": {
    fecha: "Domingo 3",
    fechaCompleta: "Domingo 3 de Noviembre, 2024",
    tipo: "Servicio Principal",
    canciones: [
      { id: 13, titulo: "A Dios Sea la Gloria", artista: "Fanny Crosby", duracion: "4:25" },
      { id: 14, titulo: "Bendito Sea Tu Nombre", artista: "Matt Redman", duracion: "5:30" },
      { id: 15, titulo: "Eres Fiel", artista: "Thomas Chisholm", duracion: "4:15" },
      { id: 16, titulo: "Mi Jesús, Mi Salvador", artista: "Darlene Zschech", duracion: "5:05" },
    ],
  },
}

interface PageProps {
  params: {
    fecha: string
  }
}

export default function FechaCancionesPage({ params }: PageProps) {
  const fechaData = cancionesPorFecha[params.fecha as keyof typeof cancionesPorFecha]

  if (!fechaData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/canciones">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a Fechas
              </Link>
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{fechaData.fecha}</h1>
                <p className="text-sm text-gray-600">{fechaData.fechaCompleta}</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              {fechaData.tipo}
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Canciones del {fechaData.fecha}</h2>
            <p className="text-gray-600">
              {fechaData.canciones.length} canción{fechaData.canciones.length !== 1 ? "es" : ""} disponible
              {fechaData.canciones.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="space-y-4">
            {fechaData.canciones.map((cancion, index) => (
              <Card key={cancion.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{cancion.titulo}</h3>
                        <p className="text-gray-600">{cancion.artista}</p>
                        <p className="text-sm text-gray-500">{cancion.duracion}</p>
                      </div>
                    </div>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link href={`/canciones/${params.fecha}/${cancion.id}`}>
                        <Play className="w-4 h-4 mr-2" />
                        Ver Letra
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navegación adicional */}
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/canciones">Ver otras fechas</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
