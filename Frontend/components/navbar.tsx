"use client"

import Link from "next/link"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { UserCircle, Heart, BookOpen, Calendar, Users, AlertTriangle } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"

const navItems = [
  { href: "/about", icon: Heart, label: "About", color: "primary" },
  { href: "/resources", icon: BookOpen, label: "Resources", color: "primary" },
  { href: "/events", icon: Calendar, label: "Events", color: "gold" },
  { href: "/therapists", icon: Users, label: "Therapists", color: "primary" },
  { href: "/sos", icon: AlertTriangle, label: "SOS", color: "red-500" },
]

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-secondary-dark border-b border-primary/20 backdrop-blur-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-4">
            <NavLinks />
          </div>

          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="default"
                className="bg-gradient-to-r from-primary to-primary-dark text-secondary-dark hover:opacity-90"
                asChild
              >
                <Link href="/chat">Start Chat</Link>
              </Button>
            </motion.div>
            <AuthButtons />
            <MobileMenu />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

function NavLinks() {
  return (
    <>
      {navItems.map((item) => (
        <motion.div key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href={item.href}
            className={`flex items-center px-4 py-2 rounded-full border border-${item.color}/20 text-${item.color} hover:bg-${item.color}/10 transition-colors`}
          >
            <item.icon className="w-5 h-5 mr-2" />
            {item.label}
          </Link>
        </motion.div>
      ))}
    </>
  )
}

function AuthButtons() {
  return (
    <div className="hidden md:flex items-center space-x-2">
      <motion.div whileHover={{ scale: 1.05 }}>
        <Button variant="outline" className="bg-white text-secondary-dark hover:opacity-90" asChild>
          <Link href="/signin">Sign In</Link>
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Button variant="ghost" className="bg-gradient-to-r from-primary to-primary-dark text-secondary-dark hover:opacity-90" asChild>
          <Link href="/signup">Sign Up</Link>
        </Button>
      </motion.div>
    </div>
  )
}

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="md:hidden border-primary text-primary hover:bg-primary/10">
          <UserCircle className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-secondary border-primary/20">
        <div className="flex flex-col space-y-4 mt-4">
          <Logo className="self-center mb-4" />
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 rounded-lg border border-${item.color}/20 text-${item.color} hover:bg-${item.color}/10 transition-colors`}
            >
              <item.icon className="w-5 h-5 mr-2" />
              {item.label}
            </Link>
          ))}
          <Button variant="outline" className="bg-gradient-to-r from-primary to-primary-dark text-secondary-dark   border-none hover:bg-gold/10 font-bold" asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button variant="ghost" className="bg-gradient-to-r from-primary to-primary-dark text-secondary-dark hover:opacity-90 font-bold" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

