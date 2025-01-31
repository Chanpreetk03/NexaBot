"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface LogoProps {
  variant?: "default" | "large"
  className?: string
}

export function Logo({ variant = "default", className }: LogoProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Prevent hydration mismatch
  }

  const size = variant === "large" ? { width: 180, height: 180 } : { width: 50, height: 50 }

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn("relative flex flex-col items-center", className)}
    >
      <div className="relative group">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-18%20at%207.36.45%20PM-fIYlQguXJKJfRQbv45KDkTuHF6ipFT.jpeg"
            alt="Nexabot Logo"
            {...size}
            className="rounded-full transition-transform duration-300"
          />
        </motion.div>
        {variant === "large" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-center"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-primary">NexaBot</h1>
            <p className="text-sm md:text-base text-neutral">EMOTIONAL SUPPORT BOT</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

