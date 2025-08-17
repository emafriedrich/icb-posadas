"use client";
import { use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Music, Type, Minus, Plus } from "lucide-react";
import { notFound } from "next/navigation";

// ==========================
// 🎵 Datos de ejemplo
// ==========================

const cancionesData = {
  141: {
    id: 141,
    titulo: "Todo lo que creó el Rey",
    artista: "",
    fecha: "Domingo 17",
    fechaSlug: "domingo-17",
    letra: `Todo lo que creó el Rey
Alce su voz y cante a Él
¡Oh alaben! ¡Aleluya!

Tú, majestuoso y fuerte sol
Tú, luna bella en esplendor
¡Oh alaben! ¡Oh alaben!
¡Aleluya! ¡Aleluya! ¡Aleluya!

Todos bendigan al Creador
Rindan humilde adoración
¡Oh alaben! ¡Aleluya!

Al Padre, al Hijo Redentor
Al Santo Espíritu de Dios
¡Oh alaben! ¡Oh alaben!
¡Aleluya! ¡Aleluya! ¡Aleluya!

Los que Su sangre redimió
Vengan y gócense en Su amor
¡Oh alaben! ¡Aleluya!

Todo pecado Él ya venció
Pongan sus cargas en Él hoy
¡Oh alaben! ¡Oh alaben!
¡Aleluya! ¡Aleluya! ¡Aleluya!

Él con poder regresará
Cielos y tierra cantarán
¡Oh alaben! ¡Aleluya!

¿Quiénes caerán ante Sus pies?
Todo lo que creó el Rey
¡Oh alaben! ¡Oh alaben!
¡Aleluya! ¡Aleluya!

¡Oh alaben! ¡Oh alaben!
¡Aleluya! ¡Aleluya! ¡Aleluya!`,
  },
  2: {
    id: 2,
    titulo: "Dios poderoso",
    artista: "",
    fecha: "Miércoles 13",
    fechaSlug: "miercoles-13",
    letra: `Quién sino el Señor
Las estrellas creó
Y su luz limitó

Quién sino el Señor
Sol y luna formó
Movimiento les dio

Quién sino el Señor
Hace la lluvia venir
Truenos rugir
Tus obras grandes son

Dios Poderoso
Tú gobiernas la creación
Con Tu Palabra Señor
Te exaltaremos

Dios Poderoso
De Ti canta la creación
Llenas todo Tú Señor
Te exaltaremos
Por siempre y siempre oh Dios

Quién sino el Señor
Ha soñado en el plan
Para al hombre salvar

Quién sino el Señor
Limpiará al pecador
Con Su sangre y amor

Quién sino el Señor
Puede dar vida y salvar
Por una cruz
Tus planes grandes son

Dios Poderoso
Tú gobiernas la creación
Con Tu Palabra Señor
Te exaltaremos

Dios Poderoso
De Ti canta la creación
Llenas todo Tú Señor
Te exaltaremos
Por siempre y siempre oh Dios

Todas las cosas
Vienen de Ti y por Ti
Oh gran Yo Soy

Todo es Tuyo
Y para Ti oh Señor
Oh gran Yo Soy`,
  },
  131: {
    id: 131,
    titulo: "Habla oh Dios",
    artista: "",
    fecha: "Domingo 17",
    fechaSlug: "domingo-17",
    letra: `Habla, oh Dios y yo escucharé
Quiero recibir Tu palabra fiel
Tu verdad plántala en mi ser
Y moldéame a Tu imagen

Que Tu voz, oh Dios, dé su fruto en mí
Produciendo amor y el obrar por fe
Habla, oh Dios y haz Tu obra en mí
Para Tu honor y Tu gloria

Habla, oh Dios y enséñame
A obedecer con toda humildad
Pruébame y escudríñame
Bajo el resplandor de tu santidad

Haz crecer mi fe, haz que pueda ver
Tu glorioso amor y Tu autoridad
Que Tu voz, voz de gran poder
Quite de mi ser, la incredulidad

Habla, oh Dios y renuévame
Para comprender Tus propósitos
Tu verdad nunca cambiará
Permanecerá por la eternidad

Junto a Ti, por fe, yo caminaré
Tus promesas son mi único sostén
Habla, oh Dios, edifícanos
Llena el mundo hoy de Tu gloria`,
  },
  4: {
    id: 4,
    titulo: "Señor mi Dios",
    artista: "",
    fecha: "Miércoles 13",
    fechaSlug: "miercoles-13",
    letra: `Señor, mi Dios, al contemplar los cielos,
el firmamento y las estrellas mil;
al oír tu voz en los potentes truenos
y ver brillar el sol en su cenit:

// Mi corazón entona la canción,
¡Cuán grande es El! ¡Cuán grande es El! //

Al recorrer los montes y los valles
y ver las bellas flores al pasar;
al escuchar el canto de las aves
y el murmurar del claro manantial:

Cuando recuerdo del amor divino
que desde el cielo al Salvador envió;
aquel Jesús que por salvarme vino
y en una cruz sufrió por mí y murió:

Cuando el Señor me llame a su presencia,
al dulce hogar, al cielo de esplendor,
le adoraré cantando la grandeza
de su poder y su infinito amor:`,
  },
  140: {
    id: 140,
    titulo: "Levántate, iglesia del Señor",
    artista: "",
    fecha: "Domingo 17",
    fechaSlug: "domingo-17",
    letra: `Levántate, iglesia del Señor,
cíñete de Su armadura;
Oye la voz de Cristo el Capitán;
Que a su ejército nos llama.
Con el escudo de la fe,
y el cinturón de la verdad.
Marchemos hoy, armados de su amor, 
Alcanzando a los perdidos.

Nuestra misión será servir y amar,
combatiendo al enemigo.
La espada de Su Espíritu
traerá libertad a los cautivos.
Aunque haya pruebas o tentación,
segura es Su salvación;
Jesús tendrá lo que ganó al morir:
por herencia de naciones.

Mira en la cruz la gracia y el perdón,
donde el Hijo fue inmolado;
Mira también vencido a sus pies, 
Al maligno aplastado.
La muerte no pudo ganar; 
Jesús triunfó al resucitar.
Y volverá reinando en esplendor
todo ojo habrá de verlo.

Espíritu, oh Dios consolador 
Danos gozo, fe y aliento.
Sea nuestro fin, y nuestro galardón,
agradar sólo al Maestro.
Los santos que lucharon ya
 celebran Su fidelidad;
//Dios les guardó y así nos guardará, 
Hasta estar con Él en gloria.//
`,
  },
  110: {
    id: 110,
    titulo: "Hubo quien por mí culpa",
    artista: "",
    fecha: "Domingo 17",
    fechaSlug: "domingo-17",
    letra: `Hubo quien por mis culpas muriera en la cruz,
Aunque indigno y vil como soy.
Soy feliz, pues su sangre vertió me Jesús,
Y con ella mis culpas borró.

Mis pecados llevó, en la cruz do murió
El sublime, el tierno Jesús.
Los desprecios sufrió, y mi alma salvó.
Él cambió mis tinieblas en luz.

Él es tierno y amante cual nadie lo fue,
Pues convierte al infiel corazón.
Y por esa paciencia y ternura yo sé
Que soy libre de condenación.

Es mi anhelo constante a Cristo seguir.
Mi camino su ejemplo marcó.
Y por darme la vida Él quiso morir.
En la cruz mi pecado clavó.`,
  },
  87: {
    id: 87,
    titulo: "Gracias, Cristo",
    artista: "",
    fecha: "Domingo 17",
    fechaSlug: "domingo-17",
    letra: `El misterio de la cruz 
no puedo comprender
La angustia que llegó a sufrir
El perfecto Dios, Su Hijo entregó
La copa amarga Él bebió por mí

Tu sangre, mi maldad lavó
Gracias, Cristo
Fue satisfecha la ira de Dios
Gracias, Cristo
Tu enemigo fui 
y hoy me siento a Tu mesa
Gracias, Cristo

Por Tu sacrificio me acercaste a Ti
Quitaste toda enemistad
Tu gloriosa gracia derramaste en mí
Tu misericordia es sin igual`,
  },
};

// ==========================
// 📅 Agrupar canciones por fecha
// ==========================
export const cancionesPorFecha = Object.values(cancionesData).reduce(
  (acc, cancion) => {
    if (!acc[cancion.fechaSlug]) {
      acc[cancion.fechaSlug] = { fecha: cancion.fecha, canciones: [] };
    }
    acc[cancion.fechaSlug].canciones.push(cancion);
    // Ordenar las canciones por ID para respetar programa
    acc[cancion.fechaSlug].canciones.sort((a, b) => a.id - b.id);
    return acc;
  },
  {} as Record<string, { fecha: string; canciones: typeof cancionesData[141][] }>
);

// ==========================
// 📄 Página de letra
// ==========================
interface PageProps {
  params: Promise<{
    fecha: string;
    id: string;
  }>;
}

export default function CancionLetraPage(props: PageProps) {
 const params = use(props.params);
  const fechaData = cancionesPorFecha[params.fecha as keyof typeof cancionesPorFecha];

  if (!fechaData) {
    notFound();
  }

  // 🔹 usamos la lista de canciones del programa, en el orden definido
  const lista = fechaData.canciones;
  const cancionId = Number.parseInt(params.id);
  const cancion = lista.find((c) => c.id === cancionId);
  if (!cancion) {
    notFound();
  }


  const index = lista.findIndex((c) => c.id === cancion.id);
  const anterior = index > 0 ? lista[index - 1] : null;
  const siguiente = index < lista.length - 1 ? lista[index + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-muted to-white">
      {/* Header */}
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
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Music className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg font-bold text-gray-900 truncate">
                  {cancion.titulo}
                </h1>
                <p className="text-sm text-gray-600 truncate">
                  {cancion.artista}
                </p>
              </div>
            </div>

            <Badge
              variant="secondary"
              className="bg-primary-light text-primary-dark text-xs flex-shrink-0"
            >
              {cancion.fecha}
            </Badge>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="py-6 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Info canción */}
          <Card className="mb-6">
            <CardHeader className="pb-4">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {cancion.titulo}
                </h2>
                <p className="text-lg text-gray-600 mb-1">{cancion.artista}</p>
                <p className="text-sm text-gray-500">{cancion.fecha}</p>
              </div>
            </CardHeader>
          </Card>

          {/* Controles de texto */}
          <div className="flex justify-center mb-6 sm:hidden">
            <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border">
              <Type className="w-4 h-4 text-gray-500" />
              <Button
                variant="ghost"
                size="sm"
                className="w-8 h-8 p-0"
                onClick={() => {
                  const content = document.getElementById("letra-content");
                  if (content) {
                    const currentSize = Number.parseInt(
                      getComputedStyle(content).fontSize
                    );
                    content.style.fontSize =
                      Math.max(32, currentSize - 2) + "px";
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
                  const content = document.getElementById("letra-content");
                  if (content) {
                    const currentSize = Number.parseInt(
                      getComputedStyle(content).fontSize
                    );
                    content.style.fontSize =
                      Math.min(24, currentSize + 2) + "px";
                  }
                }}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Letra */}
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

           {/* Navegación entre canciones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
                <Link href={`/canciones/${params.fecha}`}>
                 ←  Volver a Canciones del Domingo
                </Link>
            </Button>
          </div>

          {/* Espacio para scroll en móvil */}
          <div className="h-20 sm:h-8"></div>
        </div>
      </main>
    </div>
  );
}
