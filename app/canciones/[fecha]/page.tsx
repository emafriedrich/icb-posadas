import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, ArrowLeft, Play } from "lucide-react"
import { notFound } from "next/navigation"
import Image from "next/image"

// Datos de ejemplo - en una aplicación real esto vendría de una base de datos
export const cancionesPorFecha = {
  "miercoles-13": {
    fecha: "Miércoles 13",
    fechaCompleta: "Miércoles 13",
    tipo: "Estudio Bíblico",
    canciones: [
      { id: 1, titulo: "Todo lo que creó el Rey", artista: "", duracion: "4:32" },
      { id: 2, titulo: "Dios poderoso", artista: "", duracion: "3:45" },
      { id: 3, titulo: "Habla, oh Dios", artista: "", duracion: "4:12" },
      { id: 4, titulo: "Señor mi Dios al contemplar los cielos", artista: "", duracion: "3:28" },
    ],
  },
  "domingo-17": {
    fecha: "Domingo 17",
    fechaCompleta: "Domingo 17",
    tipo: "Reunión de Predicación y Santa Cena",
    canciones: [
      { id: 140, titulo: "Levántate, iglesia del Señor", artista: "", duracion: "4:32" },
      { id: 141, titulo: "Todo lo que creó el Rey", artista: "", duracion: "3:45" },
      { id: 131, titulo: "Habla, oh Dios", artista: "", duracion: "4:12" },
      { id: 110, titulo: "Hubo quien por mí culpa", artista: "", duracion: "3:28" },
      { id: 87, titulo: "Gracias, Cristo", artista: "", duracion: "3:28" },
    ],
  },
}

interface PageProps {
  params: Promise<{
    fecha: string
  }>
}

export default async function FechaCancionesPage(props: PageProps) {
  const params = await props.params
  const fechaData = cancionesPorFecha[params.fecha as keyof typeof cancionesPorFecha]

  if (!fechaData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-muted to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              {/* <Link href="/canciones">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a Fechas
              </Link> */}
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Music className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{fechaData.fecha}</h1>
                <p className="text-sm text-gray-600">{fechaData.fechaCompleta}</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-primary-light text-primary-dark">
              {fechaData.tipo}
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8 px-4">
       <div className="max-w-4xl mx-auto">
    <div className="text-center mb-8">
      {/* Versión MOBILE */}
      <div className="block md:hidden flex justify-center">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="Logo de la iglesia (mobile)"
        />
      </div>

      {/* Versión DESKTOP */}
      <div className="hidden md:flex justify-center">
        <Image
          src="/logo.png"
          width={150}
          height={150}
          alt="Logo de la iglesia (desktop)"
        />
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Canciones del {fechaData.fecha}
      </h2>
      <p className="text-gray-600">
        {fechaData.canciones.length} canción
        {fechaData.canciones.length !== 1 ? "es" : ""} disponible
        {fechaData.canciones.length !== 1 ? "s" : ""}
      </p>
    </div>

          <div className="space-y-4">
            {fechaData.canciones.map((cancion, index) => (
              <Card key={cancion.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{cancion.titulo}</h3>
                        <p className="text-gray-600">{cancion.artista}</p>
                        <p className="text-sm text-gray-500">{cancion.duracion}</p>
                      </div>
                    </div>
                    <Button asChild className="bg-primary hover:bg-primary-dark">
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
              {/* <Link href="/canciones">Ver otras fechas</Link> */}
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
