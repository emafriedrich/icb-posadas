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
  127: {
    id: 127,
    titulo: "Si esto no fuese amor",
    artista: "",
    duracion: "",
    fecha: "Domingo 19",
    fechaSlug: "domingo-19",
    letra: `Dejó su trono de gloria,
Aun sabiendo su fin,
El sabía que en el monte calvario,
El daría su vida por mí .

CORO Si esto no fuese amor,
No habría agua en el mar,
No habría estrellas ni sol,
Ni aves podrían volar.
Si esto no fuese amor,
Ni aún el cielo es real,
Sería vano el vivir,
Si esto no fuese amor.

-2- Aun en su inmortal suplicio,
Mostró su gran compasión,
Y al ladrón que clamó arrepentido,
Al paraíso con el lo llevó
`,
  },
  141: {
    id: 141,
    titulo: "Todo lo que creó el Rey",
    artista: "",
    duracion: "",
    fecha: "Domingo 19",
    fechaSlug: "domingo-19",
    letra: `Todo lo que creó el Rey
Alce su voz y cante a Él
¡Oh alaben! ¡Aleluya!
Tú, majestuoso y fuerte sol
Tú, luna bella en esplendor
¡Oh alaben! ¡Oh alaben!
¡Aleluya! ¡Aleluya! ¡Aleluya!

VERSO 2
Todos bendigan al Creador
Rindan humilde adoración
¡Oh alaben! ¡Aleluya!
Al Padre, al Hijo Redentor
Al Santo Espíritu de Dios
¡Oh alaben! ¡Oh alaben!
¡Aleluya! ¡Aleluya! ¡Aleluya!

VERSO 3
Los que Su sangre redimió
Vengan y gócense en Su amor
¡Oh alaben! ¡Aleluya!
Todo pecado Él ya venció
Pongan sus cargas en Él hoy
¡Oh alaben! ¡Oh alaben!
¡Aleluya! ¡Aleluya! ¡Aleluya!

VERSO 4
Él con poder regresará
Cielos y tierra cantarán
¡Oh alaben! ¡Aleluya!
¿Quiénes caerán ante Sus pies?
Todo lo que creó el Rey
¡Oh alaben! ¡Oh alaben!
¡Aleluya! ¡Aleluya!
`,
  },
  137: {
    id: 137,
    titulo: "Dios Poderoso",
    artista: "",
    duracion: "",
    fecha: "Domingo 19",
    fechaSlug: "domingo-19",
    letra: `Quién sino el Señor Las estrellas creó
Y su luz limitó Quién sino el Señor
Sol y luna formó Movimiento les dio
Quién sino el Señor Hace la lluvia venir
Truenos rugir Tus obras grandes son

Coro
Dios Poderoso Tú gobiernas la creación
Con Tu Palabra Señor Te exaltaremos
Dios Poderoso De Ti canta la creación
Llenas todo Tú Señor Te exaltaremos
Por siempre y siempre oh Dios

Quién sino el Señor Ha soñado en el plan
Para al hombre salvar Quién sino el Señor
Limpiará al pecador Con Su sangre y amor
Quién sino el Señor Puede dar vida y salvar
Por una cruzTus planes grandes son

Coro
Todas las cosas Vienen de Ti y por Ti
Oh gran Yo Soy Todo es Tuyo
Y para Ti oh Señor Oh gran Yo Soy
`,
  },
  501: {
    id: 501,
    titulo: "Cristo el Rey reina en mi",
    artista: "",
    duracion: "",
    fecha: "Domingo 19",
    fechaSlug: "domingo-19",
    letra: `Jesús mi Creador, mi Rey, mi Dios, mi Salvador
Mi vida mía ya no es, tu sangre me compró
Mi alianza de tu trono es, tu reino es mi hogar
Libre y feliz me rindo a tu Suprema autoridad

Jesús tu voz escucharé, eres mi Buen Pastor
En Tu Palabra buscaré concejo y dirección
Mi fiel ayuda y protección, en prueba y tentación
Sabiduría encontraré, andando en tu temor. 

CORO
Cristo reina en mi y seré quien me has llamado a ser
Y que mi vivir dé tu nombre a conocer.

Jesús, glorioso Hijo de Dios, Tesoro sin igual
Ningún placer o ambición, se puede comparar
Cuan infinito es tu valor, enséñame Señor
Y viviré para un mejor y eterno galardón

Jesús, del mundo eres la Luz, testigo tuyo soy
Dell Evangelio de tu cruz, seré yo portavoz
"¡Tu Reino venga!" es mi canción, Tu causa mi misión
Que sea tu gloria mi pasión consagrame Señor`,
  },
  103: {
    id: 103,
    titulo: "No valgo por mi posesión",
    artista: "",
    duracion: "",
    fecha: "Miércoles 15",
    fechaSlug: "miercoles-15",
    letra: `No valgo por mi posesión,
Ni porque fuerte sea yo;
Sino el precio de Su amor,
En la cruz.

No valgo por ser muy capaz,
Ni por perder, ni por ganar;
Sino en la sangre que vertió,
En la cruz.

Coro: Redentor, Tú eres mi gozo,
Gran tesoro, fuente de mi ser;
Confiaré en Él, no hay otro,
Mi alma satisfecha está en Él.

La fama y juventud se irán
Como la flor que hoy no está;
Mas vida eterna Tú nos das,
En la cruz.

Yo no me jactaré en saber,
Ni en opulencia, ni poder;
Mas yo me jactaré en Jesús
Y en la cruz.

Coro: Redentor, Tú eres mi gozo,
Gran tesoro, fuente de mi ser;
Confiaré en Él, no hay otro,
Mi alma satisfecha está en Él.

Esta verdead confieso hoy:
De dignidad indigno soy.
Tengo valor pues me compró,
En la cruz.

Coro: Redentor, Tú eres mi gozo,
Gran tesoro, fuente de mi ser;
Confiaré en Él, no hay otro,
Mi alma satisfecha está en Él.`,
  },
  78: {
    id: 78,
    titulo: "Venid glorificad a Dios",
    artista: "",
    duracion: "",
    fecha: "Domingo 12",
    fechaSlug: "domingo-12",
    letra: `Venid glorificad a Dios, 
el Padre del Señor
En Cristo Él nos derramó 
Su eterna bendición
Sin manchas puros en Su luz,
 nos destinó a ser
Sus hijos adoptados por 
la sangre de Jesús

Te daremos la gloria
Por Tu gracia, bondad y amor
Te daremos la gloria
¡Eres el Salvador!

Venid glorificad a Dios 
que en Cristo gracia da
Lavadas nuestras culpas son 
tenemos redención
En Él Dios ya nos reveló 
Su eterna voluntad
Que sea Cristo el Señor
 Su plan se cumplirá

Venid glorificad a Dios, 
creyentes del Señor
El sello de Su Espíritu
 por fe tenemos hoy
Él garantiza nuestra fe 
hasta el día final
Nos uniremos a alabar 
a nuestro trino Dios
`,
  },
  90: {
    id: 90,
    titulo: "Sublime Gracia",
    artista: "",
    duracion: "",
    fecha: "Domingo 12",
    fechaSlug: "domingo-12",
    letra: `Sublime Gracia del Señor
Que a un vil pecador salvó;
Fui ciego mas hoy veo yo,
Perdido y Él me halló

Su Gracia me enseñó a temer
Mis dudas ahuyentó;
Oh cuan precioso fue a mi ser
Cuando Él me transformó

En los peligros o aflicción
Que yo he tenido aquí,
Su gracia siempre me libró
Y me guiará feliz

Y cuando en Sion por siglos mil
Brillando este cual sol,
Yo cantare por siempre allí
Su amor que me salvo.
`,
  },
  70: {
    id: 70,
    titulo: "Gracia y paz",
    artista: "",
    duracion: "",
    fecha: "Miercoles 08",
    fechaSlug: "miercoles-08",
    letra: `Gracia y paz ¿Cómo puede ser?
Para el transgresor
Y al ladrón sin valor
Dices que nuestro juicio es morir
Por la eternidad
En dolor y sin Ti
Oh qué gran misterio es para mí
Qué gran misterio es para mí
Que tu gracia vino a mí

Gracia y paz ¿Cómo puede ser?
Que el perfecto Rey
Con su sangre pagó
¡Qué expiación tan grandiosa Tú das!
Que al más vil pecador
Puede limpiar y librar
Oh qué gran misterio es para mí
Qué gran misterio es para mí
Que tu gracia vino a mí

Gracia y paz ¿Cómo puede ser?
Canción de gratitud
Cantaré sin parar
Apartado y amado por Dios
Satisfecho estoy
En Jesús, mi Señor
Oh qué gran misterio es para mí
Qué gran misterio es para mí
Que tu gracia vino a mí

Oh, maravilloso amor por mí
Maravilloso amor por mí
Que tu gracia vino a mí`,
  },
  114: {
    id: 114,
    titulo: "Por fe",
    artista: "",
    duracion: "",
    fecha: "Miercoles 08",
    fechaSlug: "miercoles-08",
    letra: `Por fe veremos a nuestro Dios
En el plan que creó en la eternidad,
En la vida de los fieles que llamó
A vivir por fe y no por ver.

Por fe el justo vivirá;
Por la fe caminamos junto a Él
Como viendo al invisible, Protector;
Vivir por fe y no por ver.

Sus promesas como roca son;
Sus promesas cumple nuestro Dios.
Nos movemos solo por la fe en Él.
Vivir por fe y no por ver.

Por fe profetas hablaron fiel;
Por la fe proclamaron la verdad
Del Mesías prometido en Edén,
El que la muerte venció en la cruz.
Por fe la iglesia se moverá
Con poder del Espíritu de Dios;
Y las huestes del infierno no podrán
Dañar la obra de nuestro Dios.

Sus promesas…

Por fe los montes se moverán,
Si la fe permanece en Jesús;
El poder del evangelio librará
A todo aquel que confía en Él.
`,
  },
  500: {
    id: 500,
    titulo: "Soberano Dios",
    artista: "",
    duracion: "",
    fecha: "Miercoles 01",
    fechaSlug: "miercoles-06",
    letra: `Fortaleza hay en pruebas,
hay belleza en el dolor.
Me sostienes en mis fallas,
en Tus manos de amor.

Y Tu obras en silencio,
para santificarme.
Tu permites mis dolores,
para confirmar mi fe.

Tus planes son perfectos,
Tu no me olvidarás.
Estás conmigo en la tempestad.

¡Fiel para siempre! ¡Perfecto en amor!
Eres, Soberano Dios.

Tu eres Sabiduría,
nadie puede comprender.
Y Tu reinas sobre el cielo,
y Tu gracia eterna es.

Tu levantas al caído,
no se mide Tu bondad.
Me rodeas y sostienes,
Tus promesas nunca fallarán.

Tus planes son perfectos,
Tu no me olvidarás.
Estás conmigo en la tempestad.

¡Fiel para siempre! ¡Perfecto en amor!
Eres, Soberano Dios.

Cuando Satanás quiere herirnos,
Tu buscas nuestro bien, Tu buscas nuestro bien,
¡Para Tu gloria! 

Ahora en el camino más oscuro,
Procuras nuestro bien, Procuras nuestro Bien,
¡Para Tu gloria!

Cuando Satanás quiere herirnos,
Tu buscas nuestro bien, Tu buscas nuestro bien,
¡Para Tu gloria!

Tus planes son perfectos,
Tu no me olvidarás.
Estás conmigo en la tempestad.

¡Fiel para siempre! ¡Perfecto en amor!
Eres, Soberano Dios.`,
  },
  94: {
    id: 94,
    titulo: "Él me sostendrá",
    artista: "",
    duracion: "",
    fecha: "Miercoles 01",
    fechaSlug: "miercoles-01",
    letra: `Si mi fe ha de caer,
Él me sostendrá;
En la tentación yo se,
Él me sostendrá.
No podría estar de pie
En la oscuridad,
Pues mi amor muy frágil es,
Él me sostendrá.

Él me sostendrá,
Él me sostendrá;
Pues me ama el Salvador,
Él me sostendrá.

Él se goza en quien salvó,
Él me sostendrá;
Ante Él precioso soy,
Él me sostendrá.
Sus promesas fieles son,
Mi alma guardará;
Alto precio Él pagó, Él me sostendrá.

Él sufrió y por mí murió:
Él me sostendrá;
La justicia Él cumplió,
Él me sostendrá.
Vida eterna tengo en Él,
Él me sostendrá;
Hasta que le pueda ver;
¡Él regresará!
`,
  },
  247: {
    id: 247,
    titulo: "Cristo ya ha resucitado",
    artista: "",
    duracion: "",
    fecha: "Domingo 05",
    fechaSlug: "domingo-05",
    letra: `Cristo ya ha resucitado, ¡Aleluya!
De la muerte ha triunfado, ¡Aleluya!
El poder de su virtud, ¡Aleluya!
Cautivó la esclavitud, ¡Aleluya!

El que al polvo se humilló, ¡Aleluya!
Vencedor se levantó, ¡Aleluya!
Y cantamos en verdad, !Aleluya!
Su gloriosa majestad.!Aleluya!

El que a muerte se entregó, ¡Aleluya!
El que así nos redimió, ¡Aleluya!
Hoy en gloria celestial, !Aleluya!
Reina en vida triunfal, ¡Aleluya!

Cristo nuestro Salvador, ¡Aleluya!
De la muerte vencedor, ¡Aleluya!
Pronto vamos sin cesar, ¡Aleluya!
Tus loores a cantar, ¡Aleluya!`,
  },
  263: {
    id: 263,
    titulo: "Levantado fue Jesús",
    artista: "",
    duracion: "",
    fecha: "Domingo 05",
    fechaSlug: "domingo-05",
    letra: `Levantado fue Jesús
En la vergonzosa cruz,
Para darme la salud;
¡Aleluya! ¡Gloria a Cristo!

Soy yo indigno pecador,
El es justo Salvador;
Dio su vida en mi favor;
¡Aleluya! ¡Gloria a Cristo!

Por mis culpas yo me vi
En peligro de morir;
Mas Jesús murió por mí;
¡Aleluya! ¡Gloria a Cristo!

El rescate a Dios pagó,
“Consumado es”, declaró;
Dios por eso me aceptó;
¡Aleluya! ¡Gloria a Cristo!`,
  },
  133: {
    id: 133,
    titulo: "Alma bendice al Señor",
    artista: "",
    duracion: "",
    fecha: "Domingo 12",
    fechaSlug: "domingo-12",
    letra: `Alma, bendice al Señor
Rey potente de gloria
De sus mercedes
Esté viva en ti la memoria
¡Oh, despertad!
Arpa y salterio entonad
Himnos de honor y victoria.

Alma, bendice al Señor
Que los orbes gobierna
Y te conduce paciente
Con mano paterna
Te perdonó,
De todo mal te libró
Porque su gracia es eterna.

Alma, bendice al Señor
De tu vida la fuente
Que te creó
Y en salud te sostiene clemente
Tu Defensor
En todo trance y dolor
Su diestra es omnipotente.

Alma, bendice al Señor
Por Su amor infinito
Con todo el pueblo de Dios
Su alabanza repito
Dios, mi salud,
De todo bien plenitud
Seas por siempre bendito.
`,
  },
  201: {
    id: 201,
    titulo: "Oh que amigo nos es Cristo",
    artista: "",
    duracion: "",
    fecha: "Domingo 05",
    fechaSlug: "domingo-05",
    letra: `¡Oh! ¡qué amigo nos es Cristo!,
Nuestras culpas El llevó,
Y nos manda que llevemos
Todo a Dios en oración.
somos tristes agobiados
Y cargados de aflicción,
Esto es porque no le llevamos
Todo a Dios en oración.

Si estás débil y oprimido
De cuidados y temor,
A Jesús, refugio eterno
Dile todo en oración.
¿Te desprecian tus amigos?
Cuéntale en oración,
En sus brazos de amor tierno,
Paz tendrá tu corazón.

Jesucristo es nuestro amigo,
De esto pruebas nos mostró,
Pues para llevar consigo
Al culpable se humanó.
El castigo de su pueblo
En su muerte El sufrió,
Cristo es el amigo eterno,
Sólo en El confío yo.`,
  },
  457: {
    id: 457,
    titulo: "Cristo tan Solo",
    artista: "",
    duracion: "",
    fecha: "Domingo 05",
    fechaSlug: "domingo-05",
    letra: `Cristo tan sólo pudo amarme,
Nada podrá de El separarme,
Pues con su sangre me redimió:
Ahora soy de El.

Coro:
Ahora soy de Cristo,
Mío también es El,
Puedo gozar de su amistad
Por la eternidad.

Antes vivía en el pecado,
Mi corazón de Dios alejado;
Mas mi vergüenza El me quitó:
Ya pertenezco a él.

Mi ser rebosa de pleno gozo,
Dios me liberta, me da reposo;
Pues con su sangre me redimió:
Ahora soy de El.`,
  },
  2: {
    id: 2,
    titulo: "A Jesucristo ven",
    artista: "",
    duracion: "",
    fecha: "Miércoles 24",
    fechaSlug: "miercoles-24",
    letra: `A Jesucristo ven sin tardar,
Que entre nosotros hoy Él está,
Y te convida con dulce afán,
Tierno, diciendo: “Ven”

Coro:
¡Oh cuan grata nuestra reunión!
Cuando al fin en celestial mansión,
Con Él estemos en comunión,
Gozando eterno bien.

Piensa que Él solo puede colmar
Tu triste pecho de gozo y paz,
Y porque anhela tu bienestar
Vuelve a decirte: “Ven”.

Su voz escucha sin vacilar,
Y grato acepta lo que hoy te da;
Tal vez mañana no habrá lugar:
No te detengas, ven.`,
  },
  139: {
    id: 139,
    titulo: "Agua viva",
    artista: "",
    duracion: "",
    fecha: "Miércoles 24",
    fechaSlug: "miercoles-24",
    letra: `¿Muy sediento y vacío? 
Ven y bebe agua viva.
¿Quebrantado y cargado?
Paz te ofrece el agua viva.
Cristo llama al sediento
En la cruz de agua viva.
Nueva vida Cristo otorga,
Como río de agua viva.
Coro: 
Hay un río de amor,
De gracia y perdón,
Trae gozo al pueblo del Señor. 
Él es fiel y Su amor quitará el temor.
¡Canta al Dios de agua viva!

Él nos salva y no guarda;
El Consolador nos sana.
Nos conduce a la orilla
De este río de agua viva.
Coro
¿Muy sediento y vacío?
Ven y bebe el agua viva.
Soy amado, perdonado;
Cristo es el agua viva.
Coro          // Hay un río de amor,
De gracia y perdón,
Trae gozo al pueblo del Señor. 
Él es fiel y Su amor quitará el temor. //
¡Canta al Dios de agua viva!
Él es fiel y Su amor quitará el temor.
¡Canta al Dios de agua viva!
`,
  },
  333: {
    id: 333,
    titulo: "Tentado no cedas",
    artista: "",
    duracion: "",
    fecha: "Miércoles 24",
    fechaSlug: "miercoles-24",
    letra: `Tentado, no cedas; ceder es pecar,
Más fácil seráte luchando triunfar;
!Valor! pues, gustoso domina tu mal
Jesús librar puede de asalto mortal.

Coro:
A Jesús, pues acude;
En sus brazos tu alma
Hallará dulce calma,
El te hará vencedor.

Evita el pecado, procura agradar
A Dios, a quien debes por siempre ensalzar,
No manche tus labios impúdica voz;
Tu corazón guarda de codicia atroz.

Amante, benigno y enérgico sé,
En Cristo ten siempre indómita fe;
Veraz sea tu dicho, de Dios es tu ser;
Corona te espera y vas a vencer.`,
  },
  86: {
    id: 86,
    titulo: "El Poder de la Cruz",
    artista: "",
    duracion: "",
    fecha: "Domingo 21",
    fechaSlug: "domingo-21",
    letra: `Oh, al ver aquel negro amanecer
Cristo entregado a morir
El juzgado fue, siendo justo y fiel
Clavado a una cruz

El poder de la cruz
Pecado Él se hizo por mí
ira y culpa cargó
fui perdonado en la cruz

Oh, aquel dolor que tu rostro mostró
Cargando el peso de mi maldad
Toda corrupción, todo mal pensar
Tu sangre cubrió allí

La tierra tembló, el cielo oscureció
viendo el dolor de su Creador
El velo se rasgó, se escuchó
el clamor; su obra consumó

Al ver mi nombre allí, escrito sobre Ti
por tus dolores libre soy
La muerte derroto, la vida me otorgó
Tu incomparable amor

// El poder de la cruz
Inmolado por mí
¡Qué gran precio y Amor!
Fui perdonado en la cruz  //
`,
  },
  67: {
    id: 67,
    titulo: "Mirarte sólo a ti Señor",
    artista: "",
    duracion: "",
    fecha: "Domingo 21",
    fechaSlug: "domingo-21",
    letra: `¿Cómo puede ser que el Bueno y justo 
Se hizo hombre y fuera a morir 
Por el más vil pecador? 
¿Cómo siendo yo Su enemigo 
El sufrimiento en mi lugar tomó 
En aquella cruz? 
Y cargó mi maldad sobre Él 
Su rectitud, por la fe, mía es 
 
Aleluya, glorioso intercambio 
Oh cuan gran misterio 
Que por gracia salvo soy 
Aleluya, gloria sea a Cristo 
Por Su sacrificio 
Declarado justo soy en Él 

¿Cómo es posible que en Jesús 
Como a su Hijo Él me recibió 
Y Su nombre llevo hoy? 
Su perfecta vida de obediencia al Padre 
Al yo creer, Él me otorgó 
Y perdón me dio 
Pues cargó mi maldad sobre Él 
Su rectitud, por la fe, mía es.`,
  },
  32: {
    id: 32,
    titulo: "Mirarte sólo a ti Señor",
    artista: "",
    duracion: "",
    fecha: "Domingo 21",
    fechaSlug: "domingo-21",
    letra: `/// Mirarte sólo a ti Señor, ///
y no mirar atrás.
Seguir tu caminar Señor,
seguir sin desmayar, Señor,
seguir, siempre seguir Señor,
y no mirar atrás.

/// Amarte sólo a ti Señor ///
y no mirar atrás.
Amar tu comunión Señor,
amar sin falsedad Señor,
Amar, siempre amar Señor.
Y no mirar atrás.

/// Servirte sólo a ti Señor ///
y no mirar atrás.
Hacer tu voluntad Señor,
hacer sin vacilar, Señor,
hacer, siempre hacer Señor.
Y no mirar atrás.
`,
  },
  12: {
    id: 12,
    titulo: "Tú estas sentado",
    artista: "",
    duracion: "",
    fecha: "Domingo 19",
    fechaSlug: "domingo-19",
    letra: `Tú estás sentado, sobre tu trono
siempre reinando, soberano
Ángeles cantan, coros alaban
Dios reunido con su pueblo.

Oh! Alfa, Omega, Cristo Santo
Oh! , ven     (3 veces)
Señor Jesús

Con muchas ansias esperamos
ese gran día de tu vuelta.
Y subiremos a estar contigo
para siempre, Aleluya!

Oh! Alfa, Omega, Cristo Santo.
Oh! Ven!  (3 veces)
Señor Jesús.
Maranatha, ven Señor!
Cristo Santo. Oh! Ven!   (3 veces)
Señor Jesús.
`,
  },
  14: {
    id: 14,
    titulo: "Entra en la presencia del Señor",
    artista: "",
    duracion: "",
    fecha: "Domingo 21",
    fechaSlug: "domingo-21",
    letra: `Entra en la presencia del Señor
con gratitud, y adórale de corazón.
Entra en la presencia del Señor
con gratitud, y alza tu voz con júbilo.

Da gloria, y honra,
y alabanzas al Señor.
Oh Cristo, nombre sin igual.

Bendito sea el Señor, Dios Poderoso,
quien fue, quien es y quien vendrá.
Bendito sea el Señor, Dios Poderoso,
por siempre reinará.

Padre del cielo, te adoramos,
alzamos hoy tu nombre en alto.
Que tu reino se establezca en alabanza,
que tu pueblo te declare tu poder.

Bendito sea......
`,
  },
  120: {
    id: 120,
    titulo: "Más allá del sol",
    artista: "",
    duracion: "",
    fecha: "Miércoles 17",
    fechaSlug: "miercoles-17",
    letra: `Más allá del Sol
Más allá del Sol
Yo tengo un hogar, hogar
bello hogar más allá del Sol

Cuán gloriosa será la mañana
Cuando venga JESÚS el Salvador
las naciones unidas como hermanas
Bienvenidas daremos al SEÑOR

Esperamos la mañana Gloriosa
para dar la Bienvenida al DIOS de Amor
donde todo será color de rosa
en la santa fragancia del SEÑOR

No habrá necesidad
de la luz, el resplandor
ni el Sol dará su luz
ni tampoco su calor
allí llanto no habrá
ni tristezas ni dolor
porque entonces JESÚS el Rey del Cielo
para siempre será Consolador

El cristiano fiel y verdadero
y también el obrero de valor
y la Iglesia esposa del Cordero
estarán en los brazos del Señor

No habrá necesidad…
`,
  },
  13: {
    id: 13,
    titulo: "Este pueblo que has formado",
    artista: "",
    duracion: "",
    fecha: "Miércoles 17",
    fechaSlug: "miercoles-17",
    letra: `Este pueblo que has formado,
hoy viene a entregar
las ofrendas de sus labios
puestas en tu altar.

Y canta Hosanna, Gloria, Aleluya.
Oh Jesús amado, tu amor
me ha cautivado.
Y canta Hosanna, Gloria, Aleluya.
Alabanzas hoy yo traigo
a tu nombre Jesús

Este pueblo que es tu Iglesia,
hoy viene a buscar
al Único, a su Amado,
al Rey de libertad
`,
  },
  140: {
    id: 140,
    titulo: "Levántate iglesia del señor",
    artista: "",
    duracion: "",
    fecha: "Miércoles 17",
    fechaSlug: "miercoles-17",
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
  126: {
    id: 126,
    titulo: "Noble Sostén",
    fechaSlug: "miercoles-17",
    fecha: "Miércoles 17",
    letra: `Noble sostén
De la esperanza mía
Fuente de vida, De vida eterna
Tan solo el alma
Que en sus fuerzas fía
Tiene paz, Tiene paz

Coro: Mi sostén
Es Jesús
Nunca en la lucha
Desmayar podré
Mi sostén
Es Jesús El Señor,
Nunca en la lucha
Desmayar podré

Dura es la lucha
Difícil la tarea
Mas Tú me dotas
De tu gran poder
Mi espíritu renuevas
Con la idea nueva
De vencer
De vencer

Yo, soy muy débil
Pero en ti soy fuerte
Nunca en la lucha
Desmayar podré
Si Tú estás conmigo
Ni a la misma muerte
Temeré, Temeré.
`,
  },
  516: {
    id: 516,
    titulo: "¡Qué grande carga, oh Salvador!",
    artista: "",
    fecha: "Domingo 14",
    fechaSlug: "domingo-14",
    letra: `¡Qué grande carga, oh Salvador,
llevaste Tú por mí!
Prueba suprema de tu amor,
sufriendo afrentas mil.

Coro:
Nunca me olvidaré de Ti,
de tu agonía en Getsemaní,
Ni del Calvario do por mí,
sufriste, oh Salvador.

El enemigo en su furor,
procura hacerte mal,
Y los soldados sin razón,
muestran su crueldad.

Mofa de ti la multitud,
y el sacerdocio allí,
Se une con ella en plenitud,
de odio y maldad tan vil.

Más cual cordero así sufrió,
por nuestra iniquidad,
La copa amarga El apuró,
por nos en su bondad.

Y ahora cerca de tu cruz,
quisiéramos quedar,
Gracias Señor por la salud,
que Tú por ella das.`,
  },
  417: {
    id: 417,
    titulo: "Grande y Fiel",
    artista: "",
    fecha: "Domingo 14",
    fechaSlug: "domingo-14",
    letra: `Mi Salvador en su bondad
Al mundo malo descendió;
Y de hondo abismo de maldad
El mi alma levantó.
Coro:
Seguridad me dio Jesús
Cuando El su mano me tendió;
Estando en sombra a plena luz,
En su bondad, me levantó.

Su voz constante resistí,
Aunque El amante me llamó;
Mas su palabra recibí,
Y fiel me levantó.

Tortura cruel sufrió Jesús,
Cuando en la cruz por mí murió;
Tan sólo así me dio salud,
Y así me levantó.

Que soy feliz, yo bien lo sé,
Con esta vida que El me dio;
Más no comprendo aún por qué,
Jesús me levantó.`,
  },
  123: {
    id: 123,
    titulo: "Señor, mi redentor y Roca",
    artista: "",
    fecha: "Octubre 01",
    fechaSlug: "miercoles-01",
    letra: `Señor, mi Redentor y Roca,
Gran Tesoro de mi corazón;
Mi Dios, como Tú no hay otro,
Sólo en Ti hay gozo y salvación.
Tu amor, más alto que los cielos,
Tu gracia, más honda que el mar;
Tu ley es mi sabiduría,
Mi bien mayor y mi necesidad.

Señor, mi Redentor y Roca,
De mi vida fuerte defensor;
Señor, Tú eres mi espada,
Contra el mal, mi escudo protector.
Mi canción si acechan enemigos,
Esperanza en medio del dolor;
Mi bien en todo sufrimiento,
Refugio fiel en densa oscuridad.


Señor, mi Redentor y Roca,
De mi ruina dulce Salvador;
Mi cruz y culpa en Tus hombros,
Tú por mí sufriste hasta morir.

//Mas Tú venciste a la muerte,
En Ti encuentro libertad;//

Señor, mi Redentor y Roca,
Quiero vivir mis días para Ti.
`,
  },
  39: {
    id: 39,
    titulo: "Día tan grande",
    artista: "",
    fecha: "Domingo 14",
    fechaSlug: "domingo-14",
    letra: `Día tan grande no puedo olvidar,
día de gloria sin par;
Cuando en tinieblas al verme andar,
vino a salvarme el Señor,
gran compasión tuvo Cristo de mí,
de Gozo y Paz me llenó;
quitó las sombras, Oh Gloria a su nombre,
la noche en día cambió.

Dios descendió, de Gloria me llenó,
cuando Jesús por Gracia me salvó;
Fui ciego, me hizo ver
y en El, renacer;
Dios descendió y de Gloria me llenó,

Nací de nuevo en virtud de Jesús,
a la familia de Dios.
Justificado por Cristo el Señor
gozo la gran redención.
Bendito sea mi Padre y Dios,
que cuando vine con Fe
fui adoptado por Cristo el amado,
loores por siempre daré.

Tengo esperanza de gloria eternal,
me regocijo en Jesús.
Siempre recuerdo con fe y gratitud,
al contemplarle en la cruz,
El me prepara  un bello rincón
en la mansión celestial,
justificado yo siempre alabo
el Nombre Bendito Eternal.
`,
  },
  138: {
    id: 138,
    titulo: "Fuente de la vida eterna",
    artista: "",
    fecha: "Domingo 14",
    fechaSlug: "domingo-14",
    letra: `Fuente de la vida eterna
Y de toda bendición
Ensalzar tu gracia tierna
Debe todo corazón
Tu piedad inagotable
Abundante en perdonar
Único ser adorable
Gloria a ti debemos dar

De los cánticos celestes
Te quisiéramos cantar, 
entonados por las huestes
Que lograste rescatar
Almas son que redimiste
Porque les tuviste amor
De ellas te compadeciste
Con tiernísimo favor

Toma nuestros corazones
Llénalos de tu verdad
De tu espíritu los dones
Y de toda santidad
Guíanos en la obediencia
Humildad, amor y fe
Nos ampare tu clemencia
Salvador propicio sé
Nos ampare tu clemencia
Salvador propicio sé
`,
  },
  60: {
    id: 60,
    titulo: "El Dios que adoramos",
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
    fecha: "Domingo 12",
    fechaSlug: "domingo-12",
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
    fecha: "Miércoles 08",
    fechaSlug: "miercoles-08",
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
    fecha: "Miércoles 08",
    fechaSlug: "miercoles-08",
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
    fechaSlug: "miercoles-01",
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
    fecha: "Domingo 12",
    fechaSlug: "domingo-12",
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
    titulo: "Tengo un refugio",
    artista: "",
    fecha: "Miércoles 24",
    fechaSlug: "miercoles-24",
    letra: `Tengo un refugio en tempestad
Cuando aflicciones tengo
Cuando me llena mi temor
Mi alma en Ti descansa
Oh Cristo, en Ti me esconderé
Mi paz y mi consuelo
Nada es más grande que Tu amor
Confortas mi tristeza

Tengo un refugio en tempestad
Si mi pecado acusa
Culpable soy de mi maldad
Tu gracia aún me acepta
Oh Cristo, en Ti me esconderé
Ya no soy condenado
Refugio tengo en Tu cruz
Y salvación encuentro

Tengo un refugio en tempestad
Ti temo a la tormenta
En mi debilidad yo sé
Tu fuerza me sustenta
Oh Cristo, en Ti me esconderé
Pues llevas Tú mis cargas
Tus manos firmes me guiarán
Hasta llevarme al cielo
`,
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
    titulo: "Inmerecedor",
    artista: "",
    duracion: "",
    fecha: "Miércoles 15",
    fechaSlug: "miercoles-15",
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
Con decisión y no fallar jamás


Revestido soy, 
de la justicia de Jesús 
El me sustituyo, ahora suyo soy.
Incomparable es él 
perfecta su vida y obra es,
Todo lo consumo, 
murió y vivió
Fue glorificado 
sentado a la diestra de Dios
 Cristo bendito 
lo hiciste todo por amor.
Ahora soy deudor, 
que por tu gracia salvo soy, 
rindo a ti Señor mi vida, tuyo soy.
`,
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
    fecha: "Miércoles 15",
    fechaSlug: "miercoles-15",
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
