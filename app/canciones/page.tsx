import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, Calendar, ArrowLeft, ChevronRight } from "lucide-react"

const cancionesPorFecha = [
  {
    fecha: "Miércoles 13",
    fechaCompleta: "Miércoles 13",
    tipo: "Reunión de oración y estudio bíblico",
    slug: "miercoles-13",
    canciones: [
      { id: 1, titulo: "Todo lo que creó el Rey", artista: "Himno Tradicional" },
      { id: 2, titulo: "Dios poderoso", artista: "Himno Tradicional" },
      { id: 3, titulo: "Habla oh Dios", artista: "Himno Tradicional" },
      { id: 4, titulo: "Señor mi Dios, al contemplar los cielos", artista: "Himno Tradicional" },
    ],
  },
]

export default function CancionesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild className="flex-shrink-0">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="hidden xs:inline">Volver al Inicio</span>
                  <span className="xs:hidden">Inicio</span>
                </Link>
              </Button>
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Music className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Canciones</h1>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">
                    Selecciona una fecha para ver las canciones
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-6 sm:py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">Canciones por Fecha</h2>
            <p className="text-gray-600 text-sm sm:text-base px-4">
              Selecciona una fecha para ver las canciones de ese servicio
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6">
            {cancionesPorFecha.map((evento, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 min-w-0 flex-1">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <CardTitle className="text-lg sm:text-xl truncate">{evento.fecha}</CardTitle>
                        <CardDescription className="text-sm sm:text-base truncate">
                          {evento.fechaCompleta}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 text-xs sm:text-sm flex-shrink-0 ml-2"
                    >
                      {evento.tipo}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-600 text-sm sm:text-base">
                      {evento.canciones.length} canción{evento.canciones.length !== 1 ? "es" : ""} disponible
                      {evento.canciones.length !== 1 ? "s" : ""}
                    </p>
                  </div>

                  {/* Preview de las primeras 3 canciones */}
                  <div className="space-y-2 mb-4">
                    {evento.canciones.slice(0, 3).map((cancion) => (
                      <div key={cancion.id} className="flex items-center space-x-3 text-sm text-gray-600">
                        <Music className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="font-medium truncate">{cancion.titulo}</span>
                        <span className="text-gray-400 hidden sm:inline">-</span>
                        <span className="truncate hidden sm:inline">{cancion.artista}</span>
                      </div>
                    ))}
                    {evento.canciones.length > 3 && (
                      <p className="text-sm text-gray-500 ml-7">y {evento.canciones.length - 3} más...</p>
                    )}
                  </div>

                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 h-11">
                    <Link href={`/canciones/${evento.slug}`}>
                      Ver todas las canciones
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State si no hay canciones */}
          {cancionesPorFecha.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No hay canciones disponibles</h3>
              <p className="text-gray-600">Las canciones se agregarán próximamente.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
