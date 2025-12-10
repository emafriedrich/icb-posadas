import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Calendar, ArrowLeft, ChevronRight } from "lucide-react";

const cancionesPorFecha = [
  {
    fecha: "Miercoles",
    fechaCompleta: "Miercoles 10 de Diciembre de 2025",
    slug: "miercoles-10",
    tipo: "Reunión de Oración y Estudio Bíblico",
    canciones: [
      {
        id: 39,
        titulo: "Dia tan grande",
        artista: "",
        duracion: "",
      },
      {
        id: 125,
        titulo: "Mi alma esperará",
        artista: "",
        duracion: "",
      },
      {
        id: 99,
        titulo: "Ciudad de Dios",
        artista: "",
        duracion: "",
      },
      {
        id: 132,
        titulo: "En ti esperamos",
        artista: "",
        duracion: "",
      },
    ],
  },
  /*  {
    fecha: "Domingo",
    fechaCompleta: "Domingo 07",
    tipo: "Reunión de Predicación y Santa Cena",
    slug: "domingo-07",
    canciones: [
      {
        id: 129,
        titulo: "Nuestro Dios",
        artista: "",
        duracion: "",
      },
      {
        id: 123,
        titulo: "Señor, mi Redentor y Roca",
        artista: "",
        duracion: "",
      },
      {
        id: 131,
        titulo: "Habla, oh Dios",
        artista: "",
        duracion: "",
      },
      {
        id: 417,
        titulo: "Me Levanto",
        artista: "",
        duracion: "",
      },
      {
        id: 466,
        titulo: "En el monte calvario",
        artista: "",
        duracion: "",
      },
    ],
  }, */
];

export default function CancionesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-muted to-white">

      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">

              <Button
                variant="ghost"
                size="sm"
                asChild
                className="flex-shrink-0"
              >
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="hidden xs:inline">Volver al Inicio</span>
                  <span className="xs:hidden">Inicio</span>
                </Link>
              </Button>

              {/* Título */}
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Music className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <h1 className="text-lg sm:text-2xl font-bold text-gray-900 truncate">
                    Canciones
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">
                    Selecciona una fecha
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-5 sm:py-8 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
              Canciones por Fecha
            </h2>
            <p className="text-gray-600 text-sm sm:text-base px-2 sm:px-4">
              Selecciona una fecha para ver las canciones de ese servicio
            </p>
          </div>

          {/* Lista de eventos */}
          <div className="grid gap-4 sm:gap-6">
            {cancionesPorFecha.map((evento, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center space-x-3 min-w-0 flex-1">
                      <div className="w-9 h-9 sm:w-12 sm:h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <CardTitle className="text-base sm:text-xl truncate">
                          {evento.fecha}
                        </CardTitle>
                        <CardDescription className="text-xs sm:text-base break-words">
                          {evento.fechaCompleta} | {evento.tipo}
                        </CardDescription>
                      </div>
                    </div>
                    {/*   <Badge
                  variant="secondary"
                  className="bg-primary-light text-primary-dark text-xs sm:text-sm flex-shrink-0"
                >
                  {evento.tipo}
                </Badge> */}
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Info general */}
                  <div className="mb-3 sm:mb-4">
                    <p className="text-gray-600 text-sm sm:text-base">
                      {evento.canciones.length} canción
                      {evento.canciones.length !== 1 ? "es" : ""} disponible
                      {evento.canciones.length !== 1 ? "s" : ""}
                    </p>
                  </div>

                  {/* Preview canciones */}
                  <div className="space-y-2 mb-4">
                    {evento.canciones.slice(0, 3).map((cancion) => (
                      <div
                        key={cancion.id}
                        className="flex items-center space-x-2 sm:space-x-3 text-sm text-gray-600"
                      >
                        <Music className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="font-medium truncate">
                          {cancion.titulo}
                        </span>
                        <span className="hidden sm:inline text-gray-400">
                          -
                        </span>
                        <span className="hidden sm:inline truncate">
                          {cancion.artista}
                        </span>
                      </div>
                    ))}
                    {evento.canciones.length > 3 && (
                      <p className="text-xs sm:text-sm text-gray-500 ml-6">
                        y {evento.canciones.length - 3} más...
                      </p>
                    )}
                  </div>

                  {/* Botón ver todas */}
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary-dark h-10 sm:h-11"
                  >
                    <Link href={`/canciones/${evento.slug}`}>
                      Ver todas las canciones
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {cancionesPorFecha.length === 0 && (
            <div className="text-center py-10 sm:py-12">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                No hay canciones disponibles
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Las canciones se agregarán próximamente.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
