"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Heart, Music, Calendar, Users, Phone } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Inicio", icon: Heart },
    { href: "/canciones", label: "Canciones", icon: Music },
    { href: "/eventos", label: "Eventos", icon: Calendar },
    { href: "/comunidad", label: "Comunidad", icon: Users },
    { href: "/contacto", label: "Contacto", icon: Phone },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="w-5 h-5" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <SheetHeader>
          <SheetTitle className="text-left">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span>Iglesia Cristiana Bíblica</span>
            </div>
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-900 font-medium">{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="mt-8 pt-8 border-t">
          <div className="space-y-2 text-sm text-gray-600">
            <p className="font-medium">Horarios de Servicio:</p>
            <p>Domingo 10:00 AM</p>
            <p>Miércoles 7:00 PM</p>
            <p>Viernes 7:00 PM (Jóvenes)</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
