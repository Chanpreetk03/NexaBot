"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Brain, Users, Shield, Clock, Award, Target, Sparkles, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { Footer } from "@/components/footer"

const features = [
  {
    icon: Heart,
    title: "Empathetic Support",
    description: "Our AI is trained to provide compassionate, understanding responses to your emotional needs.",
  },
  {
    icon: Brain,
    title: "Advanced AI Technology",
    description: "Powered by state-of-the-art machine learning to deliver personalized mental health support.",
  },
  {
    icon: Users,
    title: "Human Connection",
    description: "Seamlessly connect with professional therapists when you need human interaction.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your conversations are private and secure, with enterprise-grade encryption.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access support anytime, anywhere, whenever you need someone to talk to.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Regular updates and improvements based on mental health professional feedback.",
  },
]

const values = [
  {
    icon: Heart,
    title: "Empathy First",
    description: "We prioritize understanding and compassion in every interaction",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Your mental health data is protected with enterprise-grade security",
  },
  {
    icon: Target,
    title: "Accessibility",
    description: "Making mental health support available to everyone, everywhere",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Continuously improving our AI to provide better support",
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-secondary-dark">
      {/* Hero Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(11, 12, 16, 0.8), rgba(31, 40, 51, 0.8)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nb6-cE5YM8Un2xsAvZkwqGBnsW2tEIWMG7.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <Logo variant="large" className="mx-auto mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-nexabot mb-6">
              Revolutionizing Emotional Health Support
            </h1>
            <p className="text-xl text-neutral max-w-3xl mx-auto">
              At Nexabot, we're combining advanced AI technology with human empathy to make mental health support
              accessible to everyone, everywhere, at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-gradient-nexabot mb-6">Our Mission</h2>
              <p className="text-neutral mb-6">
                We envision a world where quality mental health support is accessible to everyone. Our AI-powered
                platform breaks down barriers to mental health care, providing immediate, empathetic support when you
                need it most.
              </p>
              <ul className="space-y-4">
                {[
                  "24/7 emotional support through AI",
                  "Connection with licensed therapists",
                  "Personalized mental health resources",
                  "Community support and events",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-neutral">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nb1-4Gh5GyFlzXBq9SXNAXt932mFaXr0QG.webp"
                alt="AI Support"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary-dark/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gradient-nexabot mb-4">Our Core Values</h2>
            <p className="text-neutral max-w-2xl mx-auto">
              These principles guide everything we do at Nexabot, ensuring we provide the best possible support for our
              users.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-secondary-dark/80 backdrop-blur-md border-primary/20 h-full">
                  <CardContent className="p-6">
                    <value.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                    <p className="text-neutral">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(11, 12, 16, 0.8), rgba(31, 40, 51, 0.8)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nb3-eKtOX8Q1UppF0Ja5BXHNMBkkQCx2Jw.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gradient-nexabot mb-6">Ready to Start Your Journey?</h2>
            <p className="text-neutral mb-8 max-w-2xl mx-auto">
              Join thousands of others who have found support and guidance with Nexabot. Your path to better mental
              health begins here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-gradient-to-r from-primary to-primary-dark text-secondary-dark">
                <Link href="/chat">Start Chat Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10">
                <Link href="/resources">Explore Resources</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

