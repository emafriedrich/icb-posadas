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
  60: {
    id: 60,
    titulo: "Todo lo que creó el Rey",
    artista: "",
    fecha: "Miércoles 10",
    fechaSlug: "miercoles-10",
    letra: `El Dios que hizo los cielos y la tierra
Con el poder de su palabra
Reina con autoridad
El Dios que aún los vientos le obedecen
Una palabra es suficiente
Para los muertos levantar

Nadie es como Él
Oh gran yo soy
Tú eres el Dios que adoramos
Todopoderoso y soberano
Grande en misericordia y poder para salvar
Tú eres el Dios que adoramos
Quien derrotó la muerte y el pecado
Glorioso redentor y rey, te adoramos

El Dios que descendió desde su trono
Para llevar sobre sus hombros
Nuestra culpa y transgresión
Jesús, exaltado sobre todo
Nombre sobre todo nombre
sólo en Él hay salvación

Nadie es como Él
Oh gran yo soy

Tu eres el Dios que adoramos…

A él sea la gloria y el poder
Todo es de Él y para Él
`,
  },
  89: {
    id: 89,
    titulo: "Su gracia es mayor ",
    artista: "",
    fecha: "Miércoles 10",
    fechaSlug: "miercoles-10",
    letra: `¿Qué amor mis pecados decide olvidar?
Lanzados al mar no los quiere contar
Él siendo omnisciente olvida mi error
Mis faltas son muchas, su gracia es mayor

CORO:  Gloria a Dios
Su gracia es mayor
Sus misericordias, hoy nuevas son
Mis faltas son muchas, su gracia es mayor

Paciente me aguarda en mi desviar
Un padre, que tierno, me llama al hogar
Recibe al débil, y vil pecador
Mis faltas son muchas, su gracia es mayor

Qué grandes riquezas él nos otorgó
Su sangre fue el pago, su vida entregó
Pagó esa deuda y la canceló
Mis faltas son muchas, su gracia es mayor


///CORO///

`,
  },
  144: {
    id: 144,
    titulo: "No soy yo sino Cristo en mí",
    artista: "",
    fecha: "Miércoles 10",
    fechaSlug: "miercoles-10",
    letra: `Que grande amor y redención es Cristo
No hay nada más que el cielo pueda dar
Mi rectitud, mi libertad y gozo
Mi gracia es él mi eterna y dulce paz
Me aferro a él Jesús es mi esperanza
Vivo en el por siempre suyo soy
Asombroso es cantar mío es en verdad
No soy yo, sino en Cristo en mí

Tinieblas hay más no soy olvidado
Pues junto a mí El Salvador está
Si débil soy gozoso en el avanzo
Pues su poder en mi se mostrará
Me aferro a él es mi pastor y escudo
Por profundos valles me guiara
Él la noche venció su victoria me dio
No soy yo sino Cristo en mí

No temeré he sido perdonada
Seguro estoy el precio él ya pagó
Su sangre dio sufrió por mis pecados
Resucitó la muerte derrotó
Me aferro a él ya no soy condenada
Es Jesús mi fiel intercesor
Las cadenas rompió libertad me otorgó
No soy yo, sino Cristo en mí

Quiero seguir a Cristo mientras viva
Pues prometió llevarme hasta su hogar
Estando aquí renueva él mi vida
Hasta llegar al gozo eternal
Me aferro a él mi única esperanza
A Jesús la gloria y el honor
Cuando llegue al final estos labios dirán
No soy yo, sino Cristo en mi
Cuando llegue al final estos labios dirán
No soy yo, sino Cristo en mi
No soy yo, sino Cristo en mi`,
  },
  144: {
    id: 144,
    titulo: "No soy yo sino Cristo en mi",
    artista: "",
    fecha: "Miércoles 27",
    fechaSlug: "miercoles-27",
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
  68: {
    id: 68,
    titulo: "Amor inmerecido",
    artista: "",
    fecha: "Miércoles 10",
    fechaSlug: "miercoles-10",
    letra: `Dios me salvó por medio de Jesús.
Su justicia y bondad se ven en la cruz.
Él pagó el precio de mi maldad,
Siendo justo ocupó mi lugar.
Satisfecho el Padre ahora está
En la sangre del Cordero que vivo está!

Oh, cuanto amor inmerecido,
De su bondad yo soy testigo.
Por su sacrificio soy recibido,
Llevando Él mí castigo.
Oh, cuanto amor inmerecido,
De su perdón he recibido.
Santo soy en Jesucristo.
Reconciliado soy en su sacrificio.

Lejos andaba yo, sin esperanza y sin Dios.
En la vanidad del mundo y del pecar.
Pero Dios que es rico en misericordia,
Por su gran amor con que amo,
Aun estando muerto en pecado
Vida juntamente con Cristo me dio.
`,
  },
  110: {
    id: 110,
    titulo: "Hubo quien por mí culpa",
    artista: "",
    fecha: "Miércoles 27",
    fechaSlug: "miercoles-27",
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
    fecha: "Miércoles 27",
    fechaSlug: "miercoles-27",
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
  136: {
    id: 136,
    titulo: "Todo por Tu gloria",
    artista: "",
    fecha: "",
    fechaSlug: "miercoles-27",
    letra: `Cuando estaba muerto en vida
Extraviado y sin salida
Me buscaste
Antes de crear el mundo
Escogiste hacerme tuyo
Pues me amaste, Dios, me amaste

Sé que estás obrando en todo lo que pasa
Todo por Tu gloria y mi bien
Dios, Tú siempre cumples todas Tus promesas
Todo por Tu gloria y mi bien

Aunque el enemigo aceche
Y la muerte me rodee
Me defiendes
Si el desierto luce eterno
Y si hay noches cuando temo
Me acompañas, me acompañas

Cuando con poder regreses
O al final mi vida llegue
Me sostienes
Tú el autor de mi destino
Eres fiel y estás conmigo
Te alabo, te alabo`,
  },
  132: {
    id: 132,
    titulo: "En ti esperamos",
    artista: "",
    fecha: "",
    fechaSlug: "miercoles-27",
    letra: `Oh, líbranos del mal, Señor
El mundo quebrantado está
Aunque haya guerras y dolor
El cielo eterno es nuestro hogar

En ti esperamos, oh, Señor
Reinas con autoridad
En ti esperamos, oh, Señor
//Tu poder nos sostendrá//

Oh, líbranos del mal, Señor
Pues nos desviamos sin pensar
Cercana está la tentación
Nos lleva en pos de falsedad

En ti esperamos, oh, Señor
Cristo, el Hijo que venció
En ti esperamos, oh, Señor
//Danos plena salvación//

Oh, líbranos del mal, Señor
El diablo busca devorar
Rugiendo infunde gran temor
Mas tu poder lo aplastará

En ti esperamos, oh, Señor
Haz caer su reino, oh, Dios
En ti esperamos, oh, Señor
Te rogamos, líbranos

En ti esperamos, oh, Señor
A reinar regresarás
En ti esperamos, oh, Señor
///La creación se postrará///`,
  },
  125: {
    id: 125,
    titulo: "Mi alma esperará",
    artista: "",
    fecha: "",
    fechaSlug: "miercoles-27",
    letra: `Si me acecha Satanás y desmayo en mi interior,
Si me cubre oscuridad y me agobia el temor;
En silencio esperaré, confiaré en Ti, Señor,
Tu Palabra es mi sostén.

Tú, mi Salvación, mi fortaleza,
Esperanza fiel y roca eterna,
Mi alma, oh Dios, esperará por Ti.

Tú, mi escudo y protección, en peligro y tempestad,
Si prospera el pecador, como un soplo pasará;
Yo sé bien que triunfarás, Satanás vencido está,
Tu poder me guardará.

Tú mi salvación, mi fortaleza,
Esperanza fiel y roca eterna,
Mi alma, oh Dios, esperará por Ti.
En mi soledad, Tú, mi consuelo,
Refugio fiel, mi fundamento,
Mi alma, oh Dios, esperará por Ti.

Cuán inexplicable amor, no merezco Tu bondad,
Por Tu obra de expiación, encontré en Ti la paz;
La batalla terminó, no hay vergüenza ni temor,
Ya la muerte derrotó.

Derramamos nuestras almas
Ante Ti, Señor.
Confiaremos en tu gracia
Nuestro Salvador.`,
  },
  54: {
    id: 54,
    titulo: "Sólo en Jesús",
    artista: "",
    fecha: "",
    fechaSlug: "miercoles-27",
    letra: `Sólo en Jesús esta mi fe, 
Mi esperanza y mi canción, 
Piedra Angular, firme sostén, 
Inconmovible en la aflicción, 
Cuán grande Amor, inmensa Paz, 
En el temor o adversidad, 
Consolador, Amigo Fiel, 
Yo en Su Amor me sostendré.

Solo en Jesús, Hijo de Dios, 
Quien se humilló por nuestro bien, 
Cordero de, mi Salvación, 
Por este mundo herido fue, 
En una cruz fue a morir, 
Y Dios mostró su Gracia ahí, 
Pues mí pecado Él llevó, 
En su aflicción Vida me dio. 

En un sepulcro, Él yació, 
El cuerpo inerte del Señor, 
Más el tercer día llegó, 
Resucitó en Gloriosa Luz, 
Y al triunfar, sobre el mal, 
Perdió el pecado potestad, 
De Él suyo soy, Él mío es, 
Pues con su Sangre me compró.

Desde al nacer hasta el morir, 
Sea el Poder de Cristo en mí, 
No temeré, seguro estoy, 
Mi vida yo a Él, le doy, 

// Ningún poder, ningún afán, 
De Él me arrebatará, 
Hasta que Él, venga otra vez, 
En Su Poder me sostendré //`,
  },
  210: {
    id: 210,
    titulo: "Que lo sabe todo el Padre",
    artista: "",
    fecha: "",
    fechaSlug: "miercoles-27",
    letra: `Que lo sabe todo el Padre,
Es mi certitud,
Y que en gracia él por mí vela,
Con solicitud.
Todo cuanto Dios permita
Obra para bien,
Y deseo solamente
Responderle “Amén.”

Bien sé yo que lo futuro
En su mano está;
Con desvelo permanente
El me guiará;
Aunque en mi camino encuentre,
Penas y dolor,
Siempre tras las fuertes pruebas,
Veo su favor.

Gusto de contarle cuanto
Me sucede aquí,
Cierto que su buen cuidado
Lega aun a mí,
Y después con buen agrado
De su amor gozar,
Gracias le daré por cuanto
El me quiera dar.

Confiadamente entonces
Puedo aquí vivir,
Sin recelos ni cuidados
Por mi porvenir;
Pues mi Padre Dios me asiste
Con divino amor,
Siendo aquel que me sostiene
Cristo el Salvador.`,
  },
  112: {
    id: 112,
    titulo: "Si paz cual un rio",
    artista: "",
    fecha: "",
    fechaSlug: "miercoles-27",
    letra: `Si paz cual un río es aquí mi porción,
Si es como las olas del mar,
Cualquiera mi suerte, es ya mi canción
“Está bien, con mi alma está bien”.

Coro:
Está bien…, está bien…,
Está bien, con mi alma está bien.

Por más que Satán me tentare a mí,
En esto consuelo tendré:
Que Cristo, al ver cuan perdido yo fui,
En la cruz por mi alma murió.

Pecado llevó y las gracias le doy,
Completo el trabajo está,
llevólo en la cruz y ya libre estoy,
¡Oh! mi alma bendice al Señor.

Que viva por Cristo, y sólo por El,
Y si yo muriese, bien sé,
Que no temeré, porque Cristo es fiel
Y mi alma en su paz guardará.

Mas no es la muerte que espero, Señor,
La tumba mi meta no es,
Tu pronta venida, en tu tierno amor
Esperando mi alma hoy está.`,
  },
  99: {
    id: 99,
    titulo: "Ciudad de Dios",
    artista: "",
    fecha: "",
    fechaSlug: "miercoles-27",
    letra: `Hay un lugar al que mi alma
Anhela tanto por llegar
Una ciudad donde hay descanso
Y gozo por la eternidad
Sé que pronto allá estaré;
Con mis ojos yo veré
A aquel que vino a rescatarme
Para llevarme allí con Él

He aquí que la presencia del Señor
Mora en medio de los hombres que Él salvó
Ellos son su pueblo y Él su eterno Dios
La Ciudad de Dios es lo que anhelo yo

Hay un lugar resplandeciente,
Donde no hay más oscuridad
No existe más un enemigo;
Se vive en plena libertad
Santa y dulce comunión,
Sin vergüenza ni temor
Su justicia cubre por siempre
Mi pecado y corrupción

Hay un lugar donde su gloria
Satisface el corazón
Recibiré la recompensa:
Me abrazará mi Salvador
Ya no hay llanto ni dolor;
No hay más prueba ni aflicción
La muerte sólo una memoria,
Recuerdo de la redención
`,
  },
  104: {
    id: 104,
    titulo: "Mi esperanza fiel",
    artista: "",
    fecha: "",
    fechaSlug: "miercoles-27",
    letra: `¡Cuán grande abismo nos separaba!
¡Jamás tal cima pude escalar!
Desesperado miré hacia el cielo
Y te invoqué en mi oscuridad

Entre la noche, tu dulce gracia
Venció las sombras de mi ser
Fue consumado el plan eterno
En Jesús mi esperanza fiel

Cuán asombrosa misericordia
Inexplicable e inmenso amor
El Dios eterno dejó su gloria
Para sufrir mi maldición

La cruz lo ha dicho: Soy perdonado
Me ha redimido El gran Rey
Salvador mío, Tuya es mi vida
Oh Jesús mi esperanza fiel

// ¡Aleluya! Gloria a Aquel que me salvó
¡Aleluya! De la muerte me libró
Las cadenas rotas son
En Tu Nombre hay salvación
Oh Jesús mi esperanza fiel //

// Él su promesa selló aquel día
Cuando su cuerpo se levantó
Su voz de trueno rompió el silencio
La muerte allí Cristo derrotó //
En victoria resucitó
`,
  },
  466: {
    id: 466,
    titulo: "En el monte Calvario",
    artista: "",
    fecha: "",
    fechaSlug: "miercoles-27",
    letra: `En el monte Calvario estaba una cruz,
emblema de afrenta y dolor,
Mas yo amo a Jesús,
quien murió en la cruz,
Por salvar al más vil pecador.

Coro:
Gloriaréme solo en la cruz,
En sus triunfos mi gozo será,
Y en el día de eterna salud
Mi corona Jesús me dará.

Y aunque el mundo desprecie
la cruz de Jesús,
Para mí tiene suma atracción;
Pues en ella llevó el “Cordero de Dios”
De mi culpa la condenación.

En la cruz de Jesús, do su sangre vertió,
Hermosura contemplo sin par;
Pues en ella triunfante
a la muerte venció,
Y mi ser puede santificar.

Yo quisiera seguir en pos de Jesús,
Y su cruel menosprecio llevar;
Y algún día feliz con los santos en luz
En la gloria con El he de estar.
`,
  },
  79: {
    id: 79,
    titulo: "79 - Inmerecedor",
    artista: "",
    duracion: "",
    fecha: "Miércoles 3",
    fechaSlug: "miercoles-3",
    letra: `Inmerecedor, 
soy de tu gracia y tu perdón
De tu perfecto amor, Indigno soy.
No existe nada en mi
Por lo cual pueda, yo pagar
Tu tierna y dulce paz, 
tu eterna bondad
Tú me has amado
 y has decidido estar aquí
Para abrazarme 
sin recordarme lo que fui.
Un pecador
 que de ti su rostro escondió,
No merecía el regalo de tu amor.


Yo quiero agradecerte, Amarte siempre
Con gran pasión como lo has hecho tú.
Quiero corresponderte,
Ser fiel por siempre
Con decisión y no fallar jamás`,
  },
  82: {
    id: 82,
    titulo: "82 - Oh Gran Dios Altísimo",
    artista: "",
    duracion: "",
    fecha: "Miércoles 3",
    fechaSlug: "miercoles-3",
    letra: `Oh gran Dios altísimo
reina en mi corazón
Se tú el dueño de mi ser
Vence toda rebelión
No haya vicio ni maldad
ante ti oh Santo Dios
Me has comprado por amor,
hazme tuyo oh Señor


Mi pecado me cegó
no escuchaba yo tu voz
Ignoraba tu amor
me alejé de ti Señor
Mas tu Espíritu me dio
vida y tu palabra obró
A tu Hijo conocí
su evangelio me salvó.


Ahora ayúdame a vivir
de tu gracia depender
Guarda mi alma y corazón
del maligno líbrame
Digno de mi adoración
tuyo es todo mi existir
Oh gran Dios, altísimo
glorifícate en mí.


Digno de mi adoración
tuyo es todo mi existir
Oh gran Dios, altísimo
glorifícate en mí.`,
  },
  200: {
    id: 200,
    titulo: "Dios ayudador por siglos fiel",
    artista: "",
    duracion: "",
    fecha: "Domingo 07",
    fechaSlug: "domingo-07",
    letra: `Dios ayudador, por siglos fiel
Mi esperanza en lo porvenir
Refugio en medio de la tempestad
El que confía encuentra en ti su paz
Dios ayudador, por siglos fiel
¿Tus pensamientos quién puede entender?
Tu voluntad perfecta y buena es
Obrando todo para nuestro bien,
Oh, creo, ayúdame a creer

Dios ayudador, por siglos fiel
Mi esperanza en lo porvenir
Tú ves lo más profundo de mi ser
Y toda mi maldad conoces bien
Dios ayudador, por siglos fiel
¿Adónde yo de ti pudiera huir?
La oscura noche me podrá cubrir
Aun las tinieblas, luz son para ti,
Oh, tu mano me guiará allí

Dios ayudador, por siglos fiel
Mi esperanza en lo porvenir
Del enemigo, eres mi defensor
Y en mi debilidad, mi guardador
Dios ayudador, por siglos fiel
Mi vida escrita en tu libro está
Sé que tu gracia es mi seguridad
Me hará perseverar hasta el final,
Oh, hasta llevarme a tu hogar.`,
  },
  33: {
    id: 33,
    titulo: "33 - Fija tus ojos en Cristo",
    artista: "",
    duracion: "",
    fecha: "Domingo 07",
    fechaSlug: "domingo-07",
    letra: `Oh alma cansada y turbada,
Sin luz en la senda andarás,
Al Salvador mira y vive,
Del mundo la luz es su faz.

Fija tus ojos en Cristo,
Tan lleno de gracia y amor,
Y lo terrenal sin valor será,
A la luz del glorioso Jesús.

De muerte a vida eterna,
Te llama el Salvador fiel,
En ti no domine el pecado,
Hay siempre victoria en Él.

Jamás faltará su promesa,
Él dijo: Contigo yo estoy,
Al mundo perdido ve pronto,
Y anuncia la salvación hoy.`,
  },
  470: {
    id: 470,
    titulo: "Es tu fidelidad",
    artista: "",
    duracion: "4:32",
    fecha: "Domingo 07",
    fechaSlug: "domingo-07",
    letra: `Es tu fidelidad tan grande, Padre,
Tú dices la verdad, descanso allí.
Tu luz rodea mi senda en el mundo,
Tu voz me anima; mi fuerza es en Ti.

¡Oh, qué fidelidad! ¡Oh, qué fidelidad!
Nunca me canso de darte loor;
Cada mañana es nueva tu gracia,
Inalterable es tu gran amor.

Los enemigos son muy poderosos,
Tú eres mi amigo, Dios, Fuerte Adalid,
En la batalla me das hoy tu ayuda,
Vencido no seré, confiando en Ti.

En tu presencia, Dios, hay gran descanso,
Dulce consolación, perfecta paz;
Al ver las glorias de Cristo el Señor,
Le hemos de celebrar siempre jamás.`,
  },
  69: {
    id: 69,
    titulo: "Contempla a Dios",
    artista: "",
    duracion: "4:32",
    fecha: "Domingo 07",
    fechaSlug: "domingo-07",
    letra: `¿Quién formó las olas al hablar?
¿Quién contó la arena en el mar?
Reyes, pueblos, tiemblan a su voz
La creación le rinde adoración.

Contempla a Dios, en su trono está
Venid y adoradle
Contempla al Rey, Nadie es como él
Venid y adoradle.

¿Quién le dio consejo al Señor?
¿Quién cuestiona lo que él habló?
¿Quién al sabio Dios puede enseñar?
¿Quién comprende su gran majestad?

¿Quién sufrió los clavos en dolor?
¿Quién llevó el mal del pecador?
Jesucristo, humilde al perecer
Ha triunfado y reina con poder

Contempla a Dios, en su trono está
Venid y adoradle
Contempla al Rey, Nadie es como él
Venid y adoradle.

¡Reinarás por siempre!
¡Que tu gloria brille hoy!`,
  },
  97: {
    id: 97,
    titulo: "Roca de la eternidad",
    artista: "",
    duracion: "4:32",
    fecha: "Domingo 07",
    fechaSlug: "domingo-07",
    letra: `Roca de la eternidad
Fuiste abierta tú por mí
Sé mi escondedero fiel
Paz encuentro solo en ti
Rico y limpio manantial
En el cual lavado fui

Aunque sea siempre fiel
Aunque llore sin cesar
Del pecado no podré
Justificación lograr
Solo en ti, teniendo fe
Sobre el mal podré triunfar

Nada traigo para ti
Mas tu cruz es mi sostén
Desprovisto y en escasez
Hallo en ti la paz y el bien
Sucio y vil, acudo a ti
A ser puro y limpio al fin

Mientras haya de vivir
Y al instante de expirar
Cuando vaya a responder
En tu augusto tribunal
Sé mi escondedero fiel
Roca de la eternidad
`,
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
  {} as Record<
    string,
    { fecha: string; canciones: (typeof cancionesData)[144][] }
  >
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
  const fechaData =
    cancionesPorFecha[params.fecha as keyof typeof cancionesPorFecha];

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
          <div className="flex justify-center mb-6">
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
                      Math.max(14, currentSize - 2) + "px";
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
              <Link href={`/canciones/${params.fecha}`}>← Volver</Link>
            </Button>
          </div>

          {/* Espacio para scroll en móvil */}
          <div className="h-20 sm:h-8"></div>
        </div>
      </main>
    </div>
  );
}
