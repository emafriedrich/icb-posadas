import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, ArrowLeft, Play } from "lucide-react";
import { notFound } from "next/navigation";
import Image from "next/image";

// Datos de ejemplo - en una aplicación real esto vendría de una base de datos
export const cancionesPorFecha = {
  /*  "domingo-07": {
    fecha: "Domingo 07",
    fechaCompleta: "Domingo 07 de diciembre de 2025",
    tipo: "Servicio Dominical ICB",
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
  },  */
  "miercoles-10": {
    fecha: "Miercoles 10",
    fechaCompleta: "Miercoles 10 de Diciembre de 2025",
    tipo: "Reunión de Oración y Estudio Bíblico",
    canciones: [
      {
        id: 39,
        titulo: "Dia tan grande" ,
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
};

interface PageProps {
  params: Promise<{
    fecha: string;
  }>;
}

export default async function FechaCancionesPage(props: PageProps) {
  const params = await props.params;
  const fechaData =
    cancionesPorFecha[params.fecha as keyof typeof cancionesPorFecha];

  if (!fechaData) {
    notFound();
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
                <h1 className="text-2xl font-bold text-gray-900">
                  {fechaData.fecha}
                </h1>
                <p className="text-sm text-gray-600 break-words">
                  {fechaData.fechaCompleta} | {fechaData.tipo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            {/* Versión MOBILE */}
            <div className="block md:hidden mb-2 flex justify-center">
              <Image
                src="/logo.png"
                width={120}
                height={120}
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

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
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
              <Card
                key={cancion.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 mr-3">
                      <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-md font-semibold text-gray-900">
                          {cancion.id}. {cancion.titulo}
                        </h3>
                        <p className="text-gray-600">{cancion.artista}</p>
                        <p className="text-sm text-gray-500">
                          {cancion.duracion}
                        </p>
                      </div>
                    </div>
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary-dark"
                    >
                      <Link href={`/canciones/${params.fecha}/${cancion.id}`}>
                        <Play className="w-3 h-3 mr-3" />
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
  );
}
