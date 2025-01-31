"use client";

import { Logo } from "@/components/logo"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Brain, Users, Calendar, Phone, BookOpen } from "lucide-react"
import { motion } from "framer-motion";


const features = [
  {
    icon: Heart,
    title: "24/7 Emotional Support",
    description: "Always here to listen and support you through any challenge.",
  },
  {
    icon: Brain,
    title: "Mental Health Resources",
    description: "Access expert-curated content and self-help tools.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with others who understand your journey.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary-dark text-neutral">
      <section className="hero-section min-h-[80vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Logo variant="large" className="mb-8" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-primary gold-glow"
          >
            Your AI Companion for Mental Well-being
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-neutral max-w-2xl mx-auto"
          >
            24/7 emotional support, resources, and professional help when you need it most.
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
            <Button size="lg" className="bg-primary text-secondary hover:bg-primary-dark text-lg px-8" asChild>
              <Link href="/chat">Start Chatting Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="features-section py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gold"
          >
            How Nexabot Supports You
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={item}>
                <Card className="bg-secondary/80 border-primary/20 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <feature.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="text-neutral">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="about-section py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8 text-gold"
          >
            Why Choose Nexabot?
          </motion.h2>
          <div className="max-w-4xl mx-auto bg-secondary/80 p-8 rounded-lg">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl mb-6"
            >
              Our AI-powered platform provides compassionate support, understanding, and guidance whenever you need it.
              We combine advanced technology with human empathy to create a safe space for your mental well-being
              journey.
            </motion.p>
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
              <Button className="bg-primary text-secondary hover:bg-primary-dark" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="chat-section py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gold"
          >
            Ready to Take the First Step?
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl mb-8 text-neutral max-w-2xl mx-auto"
          >
            Join thousands of others who have found support and guidance with Nexabot. Your journey to better mental
            health starts here.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-primary text-secondary hover:bg-primary-dark" asChild>
              <Link href="/chat">Start Chat</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-secondary-dark py-8 border-t border-primary/20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Nexabot</h3>
              <p className="text-neutral">Your AI companion for mental well-being.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-neutral hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-neutral hover:text-primary">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/chat" className="text-neutral hover:text-primary">
                    Start Chat
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Contact</h3>
              <p className="text-neutral">Email: support@nexabot.com</p>
              <p className="text-neutral">Emergency: 911</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary/20 text-center text-neutral">
            <p>&copy; 2024 Nexabot. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

