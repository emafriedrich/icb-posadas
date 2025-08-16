"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, Heart, Music, Calendar, Users, Phone } from "lucide-react"
import Image from "next/image"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "/canciones", label: "Canciones", icon: Music },
/*     { href: "/eventos", label: "Reuniones", icon: Calendar },
    { href: "/contacto", label: "Contacto", icon: Phone }, */
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Abrir menú de navegación"
        >
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-80 flex flex-col justify-between"
      >
        {/* Header con branding */}
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-3">
            <Image
                 src="/logo.png"
                 width={100}
                 height={100}
                 alt="Logo de la iglesia (mobile)"
               />
          </SheetTitle>
        </SheetHeader>

        {/* Navegación principal */}
        <nav className="mt-1">
          <ul className="space-y-1">
            {navItems.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-md text-gray-800 hover:bg-gray-100 hover:text-blue-600 font-medium transition-colors"
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Info adicional */}
        <div className="mt-5 pt-4 pl-4 mb-20 border-t text-sm text-gray-600">
          <p className="font-semibold text-gray-800 mb-2">
            Horarios de Reuniones
          </p>
          <ul className="space-y-1">
            <li>Domingo – 09:00 hs</li>
            <li>Miércoles – 20:00 hs</li>
            <li>Sábados – 17:30 hs (Jóvenes)</li>
            <li>Sábados – 20:00 hs (CCB)</li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  )
}
