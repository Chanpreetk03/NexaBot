"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, MapPin, Plus, Users, Tag, Search } from "lucide-react"
import Image from "next/image"
import { Logo } from "@/components/logo"

const events = [
  {
    title: "Mindfulness Workshop",
    date: "Jan 30, 2024",
    time: "2:00 PM",
    location: "Virtual Event",
    image: "/placeholder.svg",
    category: "Workshop",
    attendees: 45,
    description: "Learn mindfulness techniques for daily stress management",
  },
  {
    title: "Mental Health Conference",
    date: "Feb 15, 2024",
    time: "9:00 AM",
    location: "Tech Hub Center",
    image: "/placeholder.svg",
    category: "Conference",
    attendees: 120,
    description: "Join leading experts in mental health for a day of learning",
  },
  {
    title: "Group Therapy Session",
    date: "Jan 28, 2024",
    time: "4:00 PM",
    location: "Virtual Event",
    image: "/placeholder.svg",
    category: "Therapy",
    attendees: 12,
    description: "Supportive group session for anxiety management",
  },
]

//const categories = ["All", "Workshop", "Conference", "Therapy", "Webinar", "Support Group"]

export default function Events() {
  const [showEventForm, setShowEventForm] = useState(false)

  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11, 12, 16, 0.85), rgba(31, 40, 51, 0.85)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nb11-YnjEAQ3QINJA4p3YBFZ11IYzJasGri.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <Logo variant="large" className="mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gradient-nexabot mb-4">Community Events</h1>
          <p className="text-xl text-neutral max-w-2xl mx-auto">
            Join our community events and workshops to learn, share, and grow together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8"
        >
          <div className="flex gap-2">
            <Button
              onClick={() => setShowEventForm(true)}
              className="bg-gradient-to-r from-primary to-primary-dark text-secondary-dark"
            >
              <Plus className="mr-2 h-4 w-4" /> Create Event
            </Button>
          </div>
        </motion.div>

        {showEventForm && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="mb-8 bg-secondary-dark/80 backdrop-blur-md border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Create New Event</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Event Title" className="bg-secondary border-primary/20 text-neutral" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input type="date" className="bg-secondary border-primary/20 text-neutral" />
                    <Input type="time" className="bg-secondary border-primary/20 text-neutral" />
                  </div>
                  <Input placeholder="Location" className="bg-secondary border-primary/20 text-neutral" />
                  <Textarea placeholder="Event Description" className="bg-secondary border-primary/20 text-neutral" />
                  <Input type="file" accept="image/*" className="bg-secondary border-primary/20 text-neutral" />
                  <Button className="w-full bg-gradient-to-r from-primary to-primary-dark text-secondary-dark">
                    Create Event
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Card className="bg-secondary-dark/80 backdrop-blur-md border-primary/20 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="relative w-full h-48">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-secondary-dark text-sm">
                      {event.category}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold text-gold mb-2">{event.title}</h3>
                  <p className="text-neutral/80 mb-4">{event.description}</p>
                  <div className="space-y-2 text-neutral">
                    <p className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-primary" />
                      {event.date}
                    </p>
                    <p className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-primary" />
                      {event.time}
                    </p>
                    <p className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-primary" />
                      {event.location}
                    </p>
                    <p className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-primary" />
                      {event.attendees} Attending
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-primary to-primary-dark text-secondary-dark">
                    Join Event
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

