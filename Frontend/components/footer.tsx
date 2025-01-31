"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, MapPin, Phone, ArrowRight, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary-dark border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-neutral/80">
              Empowering emotional wellness through AI-driven support and human connection.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center text-neutral/80">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                support@nexabot.com
              </p>
              <p className="flex items-center text-neutral/80">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center text-neutral/80">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                123 AI Street, Tech City
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Newsletter</h3>
            <p className="text-neutral/80">
              Subscribe to our newsletter for the latest updates and emotional health tips.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-secondary border-primary/20 text-neutral"
              />
              <Button size="icon" className="bg-primary text-secondary-dark">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20 text-center">
          <p className="text-neutral/80 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-2 text-red-500" /> by Nexabot Team
          </p>
          <p className="text-neutral/60 text-sm mt-2">© {new Date().getFullYear()} Nexabot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

