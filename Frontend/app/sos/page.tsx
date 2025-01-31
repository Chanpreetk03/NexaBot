"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Hospital, BadgeHelp, Flame, User, AlertTriangle } from "lucide-react"
import { Logo } from "@/components/logo"

const emergencyContacts = [
  {
    name: "Emergency Services",
    number: "911",
    icon: AlertTriangle,
    bgColor: "bg-red-600",
    textColor: "text-white",
    description: "For immediate life-threatening emergencies",
  },
  {
    name: "Crisis Hotline",
    number: "1-800-273-8255",
    icon: Phone,
    bgColor: "bg-primary",
    textColor: "text-secondary-dark",
    description: "24/7 suicide prevention and crisis support",
  },
  {
    name: "Hospital",
    number: "555-0123",
    icon: Hospital,
    bgColor: "bg-cyan-600",
    textColor: "text-white",
    description: "Local emergency medical services",
  },
  {
    name: "Police",
    number: "555-0124",
    icon: BadgeHelp,
    bgColor: "bg-blue-600",
    textColor: "text-white",
    description: "Local law enforcement",
  },
  {
    name: "Fire Department",
    number: "555-0125",
    icon: Flame,
    bgColor: "bg-orange-600",
    textColor: "text-white",
    description: "Fire and rescue services",
  },
  {
    name: "Emergency Contact",
    number: "555-0126",
    icon: User,
    bgColor: "bg-gold",
    textColor: "text-secondary-dark",
    description: "Your designated emergency contact",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function SOS() {
  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`
  }

  return (
    <div className="min-h-screen main-background py-8">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <Logo variant="large" className="mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-red-500 mb-4 emergency-pulse">Emergency / SOS</h1>
          <p className="text-white font-medium max-w-2xl mx-auto">
            If you're experiencing a mental health emergency, please don't hesitate to contact one of these services
            immediately. Help is available 24/7.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {emergencyContacts.map((contact, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Card className="sos-card bg-secondary-dark/80 border-primary/20">
                <CardHeader className={`${contact.bgColor} ${contact.textColor} rounded-t-lg`}>
                  <CardTitle className="flex items-center gap-2">
                    <contact.icon className="h-6 w-6" />
                    <span>{contact.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-neutral text-sm">{contact.description}</p>
                  <Button
                    className={`w-full ${contact.bgColor} ${contact.textColor} hover:opacity-90 emergency-pulse`}
                    onClick={() => handleCall(contact.number)}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call {contact.number}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <Card className="bg-secondary-dark/80 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-primary mb-4">Additional Resources</h2>
              <p className="text-neutral">
                Remember, you're not alone. If you're not in immediate danger but need support, you can also use our
                chat service or connect with a therapist through our platform.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => (window.location.href = "/chat")}
                >
                  Chat Now
                </Button>
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10"
                  onClick={() => (window.location.href = "/therapists")}
                >
                  Find a Therapist
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

