import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Music, MapPin, Phone, Mail } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { ExpandableCard } from "@/components/expandable-card"
import { WaveDivider } from "@/components/wave-divider"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-red-700 text-white px-4 py-2 rounded-full shadow-lg">
                <span className="font-bold text-lg">ICBíblica</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-red-700 transition-colors font-medium">
                  Anuncios
                </Link>
                <Link href="/canciones" className="text-gray-700 hover:text-red-700 transition-colors font-medium">
                  Recursos
                </Link>
                <Link href="/contacto" className="text-gray-700 hover:text-red-700 transition-colors font-medium">
                  Contáctanos
                </Link>
              </nav>
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 to-red-800 text-white py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-red-200 text-sm font-medium mb-2">IGLESIA CRISTIANA BÍBLICA</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Exaltado A Cristo
                <br />
                Proclamando Su Palabra
              </h1>
              <div className="flex flex-wrap gap-3 mb-8">
                <Button className="bg-white text-red-700 hover:bg-gray-100 px-6 py-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  Conoce más
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-700 px-6 py-3 bg-transparent hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Eventos
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-700 px-6 py-3 bg-transparent hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Nuestra historia
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-700 px-6 py-3 bg-transparent hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Liderazgo
                </Button>
              </div>
              <Button
                asChild
                className="bg-yellow-500 text-black hover:bg-yellow-400 px-8 py-3 font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Link href="/canciones">
                  <Music className="w-4 h-4 mr-2" />
                  Recursos de canciones
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/images/biblia-abierta.png"
                alt="Biblia abierta"
                width={500}
                height={400}
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
        <WaveDivider flip={true} color="#111827" />
      </section>

      {/* Anuncios 2025 */}
      <section className="bg-gray-900 text-white py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Anuncios
                <br />
                2025
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Mantente informado sobre todos nuestros eventos, servicios especiales y actividades programadas para
                este año. Únete a nuestra comunidad y participa en las bendiciones que Dios tiene preparadas.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-yellow-500 text-black hover:bg-yellow-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  Suscribirse a anuncios
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Calendario de eventos
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Eventos Especiales
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-yellow-500 text-black p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                <div className="text-2xl font-bold mb-2">1.</div>
                <h3 className="font-semibold mb-2">Servicio Dominical</h3>
                <p className="text-sm">Cada domingo 10:00 AM</p>
              </Card>
              <Card className="bg-yellow-500 text-black p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                <div className="text-2xl font-bold mb-2">2.</div>
                <h3 className="font-semibold mb-2">Estudio Bíblico</h3>
                <p className="text-sm">Miércoles 7:00 PM</p>
              </Card>
              <Card className="bg-white text-gray-900 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                <div className="text-2xl font-bold mb-2">3.</div>
                <h3 className="font-semibold mb-2">Jóvenes</h3>
                <p className="text-sm">Viernes 7:30 PM</p>
              </Card>
              <Card className="bg-white text-gray-900 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                <div className="text-2xl font-bold mb-2">4.</div>
                <h3 className="font-semibold mb-2">Retiros</h3>
                <p className="text-sm">Eventos especiales</p>
              </Card>
            </div>
          </div>
        </div>
        <WaveDivider color="#f9fafb" />
      </section>

      {/* Nosotros */}
      <section className="py-16 px-4 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nosotros</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Somos una iglesia comprometida con la enseñanza bíblica y el crecimiento espiritual de nuestra
                comunidad. Nuestro propósito es glorificar a Dios a través de la adoración, la enseñanza y el servicio.
              </p>
              <Button className="bg-red-700 hover:bg-red-800 text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                Conoce más
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Libros apilados con flores"
                width={400}
                height={300}
                className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Card className="p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra historia</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Fundada hace más de dos décadas, nuestra iglesia ha sido un faro de esperanza en la comunidad.
                  Comenzamos como un pequeño grupo de creyentes y hemos crecido hasta convertirnos en una familia
                  espiritual diversa y acogedora.
                </p>
                <Button className="bg-red-700 hover:bg-red-800 text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  Conoce nuestra historia
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/images/nosotros-historia.png"
                  alt="Historia de la iglesia"
                  width={400}
                  height={300}
                  className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Liderazgo */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Card className="p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-700 rounded-full -translate-y-16 translate-x-16 opacity-10"></div>
            <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Liderazgo en la iglesia</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Nuestro equipo pastoral está comprometido con la enseñanza bíblica sólida y el cuidado pastoral. Cada
                  líder ha sido llamado por Dios para servir y guiar a nuestra congregación con amor y sabiduría.
                </p>
                <Button className="bg-red-700 hover:bg-red-800 text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  Conoce nuestro equipo
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Pastor principal"
                  width={300}
                  height={300}
                  className="w-full max-w-sm mx-auto rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                />
                <p className="text-center mt-4 text-gray-600 font-medium">Pastor Principal</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contáctanos */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Card className="p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contáctanos</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Nos encantaría conocerte y responder cualquier pregunta que tengas. No dudes en contactarnos o
                  visitarnos en nuestros servicios.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <MapPin className="w-5 h-5 text-red-700" />
                    <span className="text-gray-700">Dirección de la iglesia</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <Phone className="w-5 h-5 text-red-700" />
                    <span className="text-gray-700">(123) 456-7890</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <Mail className="w-5 h-5 text-red-700" />
                    <span className="text-gray-700">info@iglesiacristianbiblica.org</span>
                  </div>
                </div>

                <Button className="bg-red-700 hover:bg-red-800 text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  Enviar mensaje
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Mapa de ubicación"
                  width={500}
                  height={400}
                  className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          </Card>
        </div>
        <WaveDivider flip={true} color="#B91C1C" />
      </section>

      {/* Confesión de Fe */}
      <section className="py-16 px-4 bg-red-700 text-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Confesión de Fe</h2>
          <p className="text-red-200 mb-12">Fundada en las Sagradas Escrituras conforme estas son.</p>

          <div className="space-y-4">
            <ExpandableCard
              title="Creemos que las Sagradas Escrituras son la Palabra de Dios"
              content="Creemos que las Sagradas Escrituras del Antiguo y Nuevo Testamento son la Palabra de Dios inspirada, infalible e inerrante en los manuscritos originales, y que son la suprema y final autoridad en fe y vida."
              defaultExpanded={true}
            />

            <ExpandableCard
              title="Creemos en un solo Dios verdadero"
              content="Creemos en un solo Dios verdadero, eternamente existente en tres personas: Padre, Hijo y Espíritu Santo, cada uno con atributos divinos perfectos, pero sin división de naturaleza, esencia o ser."
            />

            <ExpandableCard
              title="Creemos que Jesucristo es verdadero Dios y verdadero hombre"
              content="Creemos que Jesucristo es verdadero Dios y verdadero hombre, concebido por el Espíritu Santo y nacido de la virgen María. Él vivió una vida sin pecado y se ofreció a sí mismo como el sacrificio perfecto por los pecados del mundo."
            />

            <ExpandableCard
              title="Creemos que el hombre fue creado a imagen de Dios"
              content="Creemos que el hombre fue creado a imagen de Dios, pero cayó en pecado y está totalmente depravado. Todos los seres humanos nacen con una naturaleza pecaminosa y están separados de Dios."
            />

            <ExpandableCard
              title="Creemos que la salvación es por gracia solamente"
              content="Creemos que la salvación es por gracia solamente, por fe solamente, en Cristo solamente. Es un regalo gratuito de Dios que no puede ser ganado por obras humanas, sino que es recibido únicamente por fe."
            />

            <ExpandableCard
              title="Creemos en la resurrección corporal"
              content="Creemos en la resurrección corporal tanto de los salvos como de los perdidos; los salvos para vida eterna y los perdidos para juicio eterno."
            />

            <ExpandableCard
              title="Creemos en la segunda venida de Cristo"
              content="Creemos en la segunda venida personal y visible de nuestro Señor Jesucristo para establecer Su reino y juzgar al mundo en justicia."
            />
          </div>
        </div>
        <WaveDivider color="#111827" />
      </section>

      {/* Exaltando a Cristo */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Exaltando a Cristo,
                <br />
                Proclamando Su
                <br />
                Palabra.
              </h2>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  Conoce más
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Eventos
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Nuestra historia
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Liderazgo
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/congregacion.png"
                alt="Congregación en servicio"
                width={500}
                height={300}
                className="w-full rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="bg-red-700 text-white px-4 py-2 rounded-full inline-block mb-4 shadow-lg">
                <span className="font-bold text-lg">ICBíblica</span>
              </div>
              <p className="text-gray-400">Exaltando a Cristo, Proclamando Su Palabra.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors">Domingo 10:00 AM - Servicio Principal</li>
                <li className="hover:text-white transition-colors">Miércoles 7:00 PM - Estudio Bíblico</li>
                <li className="hover:text-white transition-colors">Viernes 7:30 PM - Jóvenes</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/canciones" className="text-gray-400 hover:text-white transition-colors">
                    Recursos de Canciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Términos y Condiciones
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Iglesia Cristiana Bíblica. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
