"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Music, Type, Minus, Plus } from "lucide-react"
import { notFound } from "next/navigation"

// Datos de ejemplo con letras completas
const cancionesData = {
  1: {
    id: 1,
    titulo: "Cuán Grande es Él",
    artista: "Himno Tradicional",
    fecha: "Miércoles 13",
    fechaSlug: "miercoles-13",
    letra: `Señor mi Dios, al contemplar los cielos,
El firmamento y las estrellas mil,
Al oír tu voz en los potentes truenos,
Y ver brillar el sol en su cenit.

Mi corazón entona la canción:
¡Cuán grande es Él! ¡Cuán grande es Él!
Mi corazón entona la canción:
¡Cuán grande es Él! ¡Cuán grande es Él!

Al recorrer los montes y los valles
Y ver las bellas flores al pasar,
Al escuchar el canto de las aves
Y el murmurar del claro manantial.

Mi corazón entona la canción:
¡Cuán grande es Él! ¡Cuán grande es Él!
Mi corazón entona la canción:
¡Cuán grande es Él! ¡Cuán grande es Él!

Cuando recuerdo del amor divino,
Que desde el cielo al Salvador envió,
Aquel Jesús que por salvarme vino,
Y en una cruz sufrió y por mí murió.

Mi corazón entona la canción:
¡Cuán grande es Él! ¡Cuán grande es Él!
Mi corazón entona la canción:
¡Cuán grande es Él! ¡Cuán grande es Él!

Cuando el Señor me llame a su presencia,
Al dulce hogar, al cielo de esplendor,
Le adoraré cantando la grandeza
De su poder y su infinito amor.

Mi corazón entona la canción:
¡Cuán grande es Él! ¡Cuán grande es Él!
Mi corazón entona la canción:
¡Cuán grande es Él! ¡Cuán grande es Él!`,
  },
  2: {
    id: 2,
    titulo: "Amazing Grace",
    artista: "John Newton",
    fecha: "Miércoles 13",
    fechaSlug: "miercoles-13",
    letra: `Amazing grace, how sweet the sound
That saved a wretch like me
I once was lost, but now am found
Was blind, but now I see

'Twas grace that taught my heart to fear
And grace my fears relieved
How precious did that grace appear
The hour I first believed

Through many dangers, toils and snares
I have already come
'Tis grace hath brought me safe thus far
And grace will lead me home

The Lord has promised good to me
His word my hope secures
He will my shield and portion be
As long as life endures

When we've been there ten thousand years
Bright shining as the sun
We've no less days to sing God's praise
Than when we'd first begun`,
  },
  3: {
    id: 3,
    titulo: "Sublime Gracia",
    artista: "Versión en Español",
    fecha: "Miércoles 13",
    fechaSlug: "miercoles-13",
    letra: `Sublime gracia del Señor
Que a un infeliz salvó
Fui ciego mas hoy miro yo
Perdido y Él me halló

Su gracia me enseñó a temer
Mis dudas ahuyentó
¡Oh cuán precioso fue a mi ser
Cuando Él me transformó!

En los peligros o aflicción
Que yo he tenido aquí
Su gracia siempre me libró
Y me guiará feliz

Y cuando en Sión por siglos mil
Brillando esté cual sol
Yo cantaré por siempre allí
Su amor que me salvó`,
  },
  4: {
    id: 4,
    titulo: "Al Cristo Vivo Sirvo",
    artista: "Himno Tradicional",
    fecha: "Miércoles 13",
    fechaSlug: "miercoles-13",
    letra: `Al Cristo vivo sirvo, Él en el mundo está
Aunque otros lo nieguen, yo sé que vive ya
Su mano me sostiene, le veo por doquier
Su voz oigo que me llama, con Él podré vencer

¡Él vive! ¡Él vive! Cristo Jesús vive hoy
Conmigo está y me salvará
Mi amante Salvador

En toda tierra y nación se puede percibir
El poder del gran amor que nos hace vivir
Los ciegos ven, los cojos andan, los muertos viven ya
La mano del Señor se extiende a todo el que vendrá

¡Él vive! ¡Él vive! Cristo Jesús vive hoy
Conmigo está y me salvará
Mi amante Salvador

Regocijáos, oh cristianos, alzad la voz en fe
Anunciad el gran mensaje: "¡Jesús el Rey se ve!"
Él vive para siempre, conmigo siempre está
Por eso con valor y gozo su nombre ensalzaré

¡Él vive! ¡Él vive! Cristo Jesús vive hoy
Conmigo está y me salvará
Mi amante Salvador`,
  },
  // Agregar más canciones aquí...
  5: {
    id: 5,
    titulo: "Santo, Santo, Santo",
    artista: "Reginald Heber",
    fecha: "Domingo 10",
    fechaSlug: "domingo-10",
    letra: `Santo, Santo, Santo, Señor omnipotente
Siempre el labio mío loores te dará
Santo, Santo, Santo, te adoro reverente
Dios en tres personas, bendita Trinidad

Santo, Santo, Santo, en numeroso coro
Santos escogidos te adoran sin cesar
De alegría llenos y sus coronas de oro
Rinden ante el trono y el cristalino mar

Santo, Santo, Santo, por más que estés velado
E imposible sea tu gloria contemplar
Santo tú eres solo y nada hay a tu lado
En poder perfecto, pureza y caridad

Santo, Santo, Santo, Señor omnipotente
Todas tus obras alaban tu poder
Santo, Santo, Santo, te adoro reverente
Dios en tres personas, bendita Trinidad`,
  },
}

interface PageProps {
  params: {
    fecha: string
    id: string
  }
}

export default function CancionLetraPage({ params }: PageProps) {
  const cancionId = Number.parseInt(params.id)
  const cancion = cancionesData[cancionId as keyof typeof cancionesData]

  if (!cancion) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header - Optimizado para móvil */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild className="flex-shrink-0">
              <Link href={`/canciones/${params.fecha}`}>
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Volver</span>
              </Link>
            </Button>

            <div className="flex items-center space-x-2 min-w-0 flex-1 mx-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Music className="w-4 h-4 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg font-bold text-gray-900 truncate">{cancion.titulo}</h1>
                <p className="text-sm text-gray-600 truncate">{cancion.artista}</p>
              </div>
            </div>

            <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs flex-shrink-0">
              {cancion.fecha}
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content - Optimizado para lectura en móvil */}
      <main className="py-6 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Información de la canción */}
          <Card className="mb-6">
            <CardHeader className="pb-4">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{cancion.titulo}</h2>
                <p className="text-lg text-gray-600 mb-1">{cancion.artista}</p>
                <p className="text-sm text-gray-500">{cancion.fecha}</p>
              </div>
            </CardHeader>
          </Card>

          {/* Controles de texto - Solo en móvil */}
          <div className="flex justify-center mb-6 sm:hidden">
            <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border">
              <Type className="w-4 h-4 text-gray-500" />
              <Button
                variant="ghost"
                size="sm"
                className="w-8 h-8 p-0"
                onClick={() => {
                  const content = document.getElementById("letra-content")
                  if (content) {
                    const currentSize = Number.parseInt(getComputedStyle(content).fontSize)
                    content.style.fontSize = Math.max(14, currentSize - 2) + "px"
                  }
                }}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="text-sm text-gray-500 px-2">Aa</span>
              <Button
                variant="ghost"
                size="sm"
                className="w-8 h-8 p-0"
                onClick={() => {
                  const content = document.getElementById("letra-content")
                  if (content) {
                    const currentSize = Number.parseInt(getComputedStyle(content).fontSize)
                    content.style.fontSize = Math.min(24, currentSize + 2) + "px"
                  }
                }}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Letra de la canción - Optimizada para lectura */}
          <Card className="mb-8">
            <CardContent className="p-6 sm:p-8">
              <div
                id="letra-content"
                className="whitespace-pre-line text-gray-800 leading-relaxed text-base sm:text-lg"
                style={{
                  fontFamily: "Georgia, serif",
                  lineHeight: "1.8",
                  fontSize: "18px",
                }}
              >
                {cancion.letra}
              </div>
            </CardContent>
          </Card>

          {/* Navegación inferior */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild className="w-full sm:w-auto bg-transparent">
              <Link href={`/canciones/${params.fecha}`}>Ver otras canciones del {cancion.fecha}</Link>
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto bg-transparent">
              <Link href="/canciones">Ver todas las fechas</Link>
            </Button>
          </div>

          {/* Espacio adicional para scroll en móvil */}
          <div className="h-20 sm:h-8"></div>
        </div>
      </main>
    </div>
  )
}
