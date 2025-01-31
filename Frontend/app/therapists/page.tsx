"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, MapPin, Star, Phone, Mail, Video } from "lucide-react"
import Image from "next/image"
import { Logo } from "@/components/logo"

const therapists = [
  {
    name: "Dr. Sarah Johnson",
    title: "Clinical Psychologist",
    specialties: ["Anxiety", "Depression", "Trauma Recovery"],
    rating: 4.9,
    reviews: 127,
    image: "/placeholder.svg?height=400&width=400",
    availability: "Next available: Tomorrow",
    price: "$120/session",
    languages: ["English", "Spanish"],
  },
  {
    name: "Dr. Michael Chen",
    title: "Psychiatrist",
    specialties: ["Mood Disorders", "ADHD", "Stress Management"],
    rating: 4.8,
    reviews: 93,
    image: "/placeholder.svg?height=400&width=400",
    availability: "Next available: Today",
    price: "$150/session",
    languages: ["English", "Mandarin"],
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Family Therapist",
    specialties: ["Relationship Issues", "Family Dynamics", "Personal Growth"],
    rating: 4.9,
    reviews: 156,
    image: "/placeholder.svg?height=400&width=400",
    availability: "Next available: Wednesday",
    price: "$100/session",
    languages: ["English", "Portuguese"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Therapists() {
  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11, 12, 16, 0.85), rgba(31, 40, 51, 0.85)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nb7-V2SPdCgYmIE7Gv4MRrGpiKgGkQCl9x.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <Logo variant="large" className="mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gradient-nexabot mb-4">Connect with Professional Therapists</h1>
          <p className="text-xl text-neutral max-w-2xl mx-auto">
            Find the right mental health professional for your needs. All our therapists are licensed and verified.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {therapists.map((therapist, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-secondary-dark/80 backdrop-blur-md border-primary/20 hover:border-primary transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <Image
                      src={therapist.image || "/placeholder.svg"}
                      alt={therapist.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-primary">{therapist.name}</CardTitle>
                    <CardDescription className="text-neutral">{therapist.title}</CardDescription>
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-gold" />
                      <span className="text-gold">{therapist.rating}</span>
                      <span className="text-neutral">({therapist.reviews} reviews)</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-primary font-medium">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {therapist.specialties.map((specialty, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-neutral">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      {therapist.availability}
                    </div>
                    <div className="flex items-center text-neutral">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      {therapist.languages.join(", ")}
                    </div>
                    <div className="flex items-center text-neutral">
                      <Star className="w-4 h-4 mr-2 text-primary" />
                      {therapist.price}
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-primary to-primary-dark text-secondary-dark">
                        Book Consultation
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-secondary-dark border-primary/20">
                      <DialogHeader>
                        <DialogTitle className="text-primary">Book a Session with {therapist.name}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 p-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-neutral mb-2">Session Type</h4>
                            <div className="space-y-2">
                              <Button variant="outline" className="w-full border-primary/20 text-neutral">
                                <Video className="w-4 h-4 mr-2" />
                                Video Call
                              </Button>
                              <Button variant="outline" className="w-full border-primary/20 text-neutral">
                                <Phone className="w-4 h-4 mr-2" />
                                Phone Call
                              </Button>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-neutral mb-2">Select Date & Time</h4>
                            <Input type="date" className="mb-2 bg-secondary border-primary/20 text-neutral" />
                            <Input type="time" className="bg-secondary border-primary/20 text-neutral" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-neutral mb-2">Your Information</h4>
                          <div className="space-y-2">
                            <Input placeholder="Full Name" className="bg-secondary border-primary/20 text-neutral" />
                            <Input
                              type="email"
                              placeholder="Email"
                              className="bg-secondary border-primary/20 text-neutral"
                            />
                            <Input
                              type="tel"
                              placeholder="Phone"
                              className="bg-secondary border-primary/20 text-neutral"
                            />
                            <Textarea
                              placeholder="Brief description of what you'd like to discuss"
                              className="bg-secondary border-primary/20 text-neutral"
                            />
                          </div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-primary to-primary-dark text-secondary-dark">
                          Confirm Booking
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

