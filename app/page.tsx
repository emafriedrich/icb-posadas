import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Music, Heart, Users, BookOpen, Calendar, Phone, Mail, MapPin, Play, Church, History } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { ConfessionCard } from "@/components/confession-card"
import Image from "next/image"
import { EventsCalendar } from "@/components/events-card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="block md:hidden">
    <Image
      src="/logo.png"
      width={100}
      height={100}
      alt="Logo de la iglesia (mobile)"
    />
  </div>

  {/* Versión DESKTOP */}
  <div className="hidden md:block">
    <Image
      src="/logo.png"
      width={250}
      height={250}
      alt="Logo de la iglesia (desktop)"
    />
  </div>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-8">
                <Link href="#eventos" className="text-foreground hover:text-primary transition-colors font-medium">
                  Eventos
                </Link>
                <Link href="/canciones" className="text-foreground hover:text-primary transition-colors font-medium">
                  Recursos
                </Link>
                <Link href="#contacto" className="text-foreground hover:text-primary transition-colors font-medium">
                  Contacto
                </Link>
              </nav>
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Video */}
     <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Overlay oscuro */}
  <div className="absolute inset-0 bg-black/20"></div>

  <div className="max-w-7xl mx-auto relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Texto */}
      <div className="text-center lg:text-left">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6">
          <span className="text-xs sm:text-sm font-medium">Bienvenido, Dios te bendiga.</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Exaltando a Cristo <br /> 
          Proclamando Su Palabra
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed font-serif">
          Somos Iglesia Cristiana Bíblica, creemos en la centralidad del evangelio en Cristo, 
          en la gracia de Dios y en vivir una vida transformada por la Palabra.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
          >
            Únete este domingo
          </Button>
        </div>
      </div>

      {/* Imagen con botón play */}
      <div className="relative">
        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl">
          <Image
            src="/reunión.jpg"
            alt="Comunidad de la iglesia en adoración"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl sm:rounded-2xl shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl sm:rounded-2xl"></div>
          
        </div>
      </div>

    </div>
  </div>
</section>


    {/* 
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Nuestra Iglesia</h2>
            <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
             “Unidos en la fe y guiados por las Escrituras, buscamos glorificar a Dios y edificarnos mutuamente.”
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Enseñanza Bíblica</h3>
              <p className="text-muted-foreground font-serif leading-relaxed">
               Nuestra enseñanza está anclada en la Biblia, que es suficiente, clara y poderosa para transformar vidas.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Comunión</h3>
              <p className="text-muted-foreground font-serif leading-relaxed">
               Creemos que la iglesia es la comunidad del pacto donde cada creyente encuentra amor, discipulado y comunión verdadera.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Servicio</h3>
              <p className="text-muted-foreground font-serif leading-relaxed">
                Anunciamos al mundo la esperanza eterna que se encuentra solo en el evangelio.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="eventos" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Próximos Eventos</h2>
            <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
              Únete a nosotros en nuestros servicios y actividades. Hay un lugar para ti en cada evento.
            </p>
          </div>
          <EventsCalendar />
        </div>
      </section>

      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Testimonios</h2>
            <p className="text-xl text-muted-foreground font-serif">
              Escucha las historias de transformación de nuestra comunidad de fe.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Involúcrate</h2>
          <p className="text-xl mb-12 text-primary-foreground/90 font-serif max-w-3xl mx-auto">
            Hay muchas maneras de ser parte activa de nuestra comunidad. Descubre cómo puedes usar tus dones para
            servir.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <Music className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-3 text-white">Ministerio de Música</h3>
              <p className="text-white/80 font-serif mb-4">
                Únete a nuestro equipo de adoración y usa tu talento musical para glorificar a Dios.
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Más información
              </Button>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <Users className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-3 text-white">Grupos Pequeños</h3>
              <p className="text-white/80 font-serif mb-4">
                Conecta más profundamente con otros creyentes en un ambiente íntimo de crecimiento.
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Únete a un grupo
              </Button>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <Heart className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-3 text-white">Servicio Comunitario</h3>
              <p className="text-white/80 font-serif mb-4">
                Participa en nuestros proyectos de alcance y marca una diferencia en la comunidad.
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Voluntariado
              </Button>
            </Card>
          </div>

          <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl">
            <Link href="/canciones" className="flex items-center">
              <Music className="w-5 h-5 mr-2" />
              Explora recursos de canciones
            </Link>
          </Button>
        </div>
      </section>

  
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Church className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Confesión de Fe</h2>
            <p className="text-xl text-muted-foreground font-serif">
              Fundados en la Palabra de Dios, estas son nuestras creencias fundamentales.
            </p>
          </div>

          <div className="space-y-4">
            <ConfessionCard
              title="La Autoridad de las Escrituras"
              content="Creemos que la Biblia es la Palabra inspirada e infalible de Dios, nuestra única regla de fe y práctica. Las Sagradas Escrituras son completamente confiables y suficientes para guiar nuestra vida cristiana y doctrina."
            />
            <ConfessionCard
              title="La Trinidad"
              content="Confesamos la doctrina de la Trinidad: un solo Dios que existe eternamente en tres personas distintas - Padre, Hijo y Espíritu Santo - coiguales en poder, gloria y majestad, pero distintos en sus roles y funciones."
            />
            <ConfessionCard
              title="La Salvación por Gracia"
              content="Afirmamos que la salvación es únicamente por gracia, mediante la fe en Jesucristo. No es por obras para que nadie se gloríe, sino que es un regalo gratuito de Dios para todos los que creen en Su Hijo."
            />
            <ConfessionCard
              title="La Iglesia y los Sacramentos"
              content="Creemos en la iglesia universal como el cuerpo de Cristo, compuesta por todos los creyentes. Practicamos el bautismo por inmersión y la Santa Cena como ordenanzas establecidas por Cristo para Su iglesia."
            />
            <ConfessionCard
              title="La Segunda Venida de Cristo"
              content="Esperamos la segunda venida de nuestro Señor Jesucristo, quien vendrá en gloria para juzgar a vivos y muertos, establecer Su reino eterno y hacer nuevas todas las cosas."
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <History className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Nuestra Historia</h2>
            <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
              Un legado de fe, crecimiento y servicio a la comunidad a través de los años.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 px-3 py-1 rounded-full flex-shrink-0">
                    <span className="text-sm font-bold text-primary">1995</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Los Primeros Pasos</h3>
                    <p className="text-muted-foreground font-serif">
                      Un pequeño grupo de familias se reunió con el sueño de establecer una iglesia centrada en la
                      Palabra de Dios y el amor fraternal.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 px-3 py-1 rounded-full flex-shrink-0">
                    <span className="text-sm font-bold text-secondary">2003</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Crecimiento y Expansión</h3>
                    <p className="text-muted-foreground font-serif">
                      La congregación creció significativamente, estableciendo ministerios para niños, jóvenes y
                      familias, fortaleciendo nuestra comunidad de fe.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 px-3 py-1 rounded-full flex-shrink-0">
                    <span className="text-sm font-bold text-accent">2015</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Nuevo Templo</h3>
                    <p className="text-muted-foreground font-serif">
                      Inauguramos nuestro nuevo edificio, diseñado para servir mejor a nuestra creciente comunidad y
                      alcanzar más vidas para Cristo.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 px-3 py-1 rounded-full flex-shrink-0">
                    <span className="text-sm font-bold text-primary">Hoy</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Mirando al Futuro</h3>
                    <p className="text-muted-foreground font-serif">
                      Continuamos creciendo en fe y número, comprometidos con nuestra misión de exaltar a Cristo y
                      proclamar Su Palabra a las nuevas generaciones.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Historia de la iglesia - congregación a través de los años"
                width={500}
                height={600}
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">30 Años de Fe</h3>
                <p className="text-white/90">Construyendo un legado de amor y servicio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Contáctanos</h2>
            <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
              Nos encantaría conocerte. Ven y sé parte de nuestra familia de fe.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Ubicación</h3>
                    <p className="text-muted-foreground">Calle Principal 123, Ciudad</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Teléfono</h3>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Email</h3>
                    <p className="text-muted-foreground">info@icbiblica.org</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Horarios de Servicio</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Domingo: 10:00 AM</p>
                      <p>Miércoles: 7:00 PM</p>
                      <p>Viernes: 7:30 PM (Jóvenes)</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Edificio de la iglesia"
                width={600}
                height={500}
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Visítanos</h3>
                <p className="text-white/90">Te esperamos con los brazos abiertos</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full inline-block mb-6 shadow-lg">
                <span className="font-bold text-lg">ICBíblica</span>
              </div>
              <p className="text-background/80 mb-6 font-serif leading-relaxed">
                Exaltando a Cristo, Proclamando Su Palabra. Somos una comunidad de fe comprometida con el crecimiento
                espiritual y el servicio a nuestra comunidad.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-background">Servicios</h4>
              <ul className="space-y-3 text-background/80">
                <li className="hover:text-background transition-colors">Domingo 09:00 hs - Reunión de Predicación Y Santa Cena</li>
                <li className="hover:text-background transition-colors">Miércoles 20:00 hs - Reunión de Oración  Y Estudio Bíblico</li>
                <li className="hover:text-background transition-colors">Sábados 17:30 hs - Discipulado Juvenil</li>
                <li className="hover:text-background transition-colors">Sábados 20:00 hs - Curso de Capacitación Bíblica</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-background">Enlaces</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/canciones" className="text-background/80 hover:text-background transition-colors">
                    Recursos de Canciones
                  </Link>
                </li>
                {/* <li>
                  <Link href="#" className="text-background/80 hover:text-background transition-colors">
                    Ministerios
                  </Link>
                </li>
                <li>
                  <Link href="#eventos" className="text-background/80 hover:text-background transition-colors">
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-background/80 hover:text-background transition-colors">
                    Donaciones
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
            <p>&copy; 2025 Iglesia Cristiana Bíblica. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
