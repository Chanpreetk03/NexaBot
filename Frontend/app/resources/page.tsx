"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Video, FileText, Headphones, Brain, Heart, Users, Star, Play } from "lucide-react"
import { Logo } from "@/components/logo"

const resources = [
  {
    type: "Book",
    title: "The Mindful Way Through Depression",
    author: "Mark Williams, John Teasdale, Zindel Segal, and Jon Kabat-Zinn",
    description: "Freeing Yourself from Chronic Unhappiness",
    image: "/placeholder.svg?height=200&width=150",
    link: "https://example.com/mindful-way",
    icon: BookOpen,
    color: "primary",
  },
  {
    type: "Video",
    title: "Understanding Anxiety",
    author: "Dr. Sarah Johnson",
    description: "A comprehensive guide to managing anxiety in daily life",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://example.com/understanding-anxiety",
    icon: Play,
    color: "gold",
  },
  {
    type: "Article",
    title: "10 Strategies for Better Sleep",
    author: "Sleep Foundation",
    description: "Improve your sleep quality with these evidence-based tips",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://example.com/better-sleep",
    icon: FileText,
    color: "primary-dark",
  },
  {
    type: "Podcast",
    title: "The Happiness Lab",
    author: "Dr. Laurie Santos",
    description:
      "You might think more money, a better job, or Instagram-worthy vacations would make you happier. You're dead wrong.",
    image: "/placeholder.svg?height=200&width=200",
    link: "https://example.com/happiness-lab",
    icon: Headphones,
    color: "primary",
  },
  // {
  //   type: "Video",
  //   title: "Stress Management Techniques",
  //   author: "Dr. Michael Chen",
  //   description: "Learn practical techniques to manage stress and anxiety in your daily life",
  //   image: "/placeholder.svg?height=200&width=300",
  //   link: "https://example.com/stress-management",
  //   icon: Brain,
  //   color: "gold",
  //   category: "Stress",
  // },
  // {
  //   type: "Article",
  //   title: "Building Healthy Relationships",
  //   author: "Relationship Experts Panel",
  //   description: "A guide to fostering meaningful connections and maintaining healthy boundaries",
  //   image: "/placeholder.svg?height=200&width=300",
  //   link: "https://example.com/healthy-relationships",
  //   icon: Heart,
  //   color: "primary",
  //   category: "Relationships",
  // },
]

// const categories = ["All", "Depression", "Anxiety", "Sleep", "Happiness", "Stress", "Relationships"]

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

export default function ResourcesPage() {
  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11, 12, 16, 0.75), rgba(31, 40, 51, 0.75)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nb10-hlSySqDlehOEaeeyfu5WHX6lTURhDN.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <Logo variant="large" className="mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gradient-nexabot mb-4">Mental Health Resources</h1>
          <p className="text-xl text-neutral max-w-2xl mx-auto">
            Explore our curated collection of mental health resources, from expert-led videos to insightful articles and
            books.
          </p>
        </motion.div>

        {/* Removed categories section */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {resources.map((resource, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-secondary-dark/80 backdrop-blur-md border-primary/20 hover:border-primary transition-all duration-300 h-full flex flex-col">
                <CardHeader className="space-y-4">
                  <div className="relative w-full h-48">
                    <Image
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <div className={`absolute top-4 right-4 p-2 rounded-full bg-${resource.color} text-secondary-dark`}>
                      <resource.icon className="w-5 h-5" />
                    </div>
                    {/* Removed category label */}
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-primary">{resource.type}</CardTitle>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-gold" />
                        <span className="text-neutral ml-1">4.8</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gold mb-2">{resource.title}</h3>
                    <p className="text-sm text-neutral mb-2">By {resource.author}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-neutral/80">{resource.description}</p>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-primary-dark text-secondary-dark hover:opacity-90"
                  >
                    <Link href={resource.link}>Access Resource</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Removed recommendation card */}
      </div>
    </div>
  )
}

