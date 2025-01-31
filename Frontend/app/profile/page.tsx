"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserCircle, Plus, Trash2, Lock } from "lucide-react"
import { Logo } from "@/components/logo"
import Image from "next/image"

export default function Profile() {
  const [image, setImage] = useState<string | null>(null)
  const [emergencyContacts, setEmergencyContacts] = useState([{ name: "", phone: "" }])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const addEmergencyContact = () => {
    setEmergencyContacts([...emergencyContacts, { name: "", phone: "" }])
  }

  const removeEmergencyContact = (index: number) => {
    const updatedContacts = emergencyContacts.filter((_, i) => i !== index)
    setEmergencyContacts(updatedContacts)
  }

  return (
    <div className="min-h-screen relative">
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

      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <Logo variant="large" className="mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gradient-nexabot mb-4">Profile Management</h1>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
          <Card className="bg-secondary-dark/80 backdrop-blur-md border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Profile Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Profile Picture */}
              <div className="flex flex-col items-center space-y-4">
                <motion.div whileHover={{ scale: 1.05 }} className="relative h-32 w-32">
                  {image ? (
                    <Image src={image || "/placeholder.svg"} alt="Profile" fill className="rounded-full object-cover" />
                  ) : (
                    <UserCircle className="h-32 w-32 text-primary" />
                  )}
                </motion.div>
                <Label htmlFor="picture" className="cursor-pointer text-primary hover:text-primary/90">
                  {image ? "Change Profile Picture" : "Upload Profile Picture"}
                  <Input id="picture" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                </Label>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Contact Details</h3>
                <div className="space-y-4">
                  <div>
                    <Label className="text-neutral">Full Name</Label>
                    <Input className="bg-secondary border-primary/20 text-neutral" />
                  </div>
                  <div>
                    <Label className="text-neutral">Email</Label>
                    <Input type="email" className="bg-secondary border-primary/20 text-neutral" />
                  </div>
                  <div>
                    <Label className="text-neutral">Phone</Label>
                    <Input type="tel" className="bg-secondary border-primary/20 text-neutral" />
                  </div>
                </div>
              </div>

              {/* Emergency Contacts */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-primary">Emergency Contacts</h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addEmergencyContact}
                    className="text-primary border-primary hover:bg-primary/10"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Contact
                  </Button>
                </div>
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="flex gap-2">
                    <Input placeholder="Contact Name" className="bg-secondary border-primary/20 text-neutral" />
                    <Input placeholder="Contact Phone" className="bg-secondary border-primary/20 text-neutral" />
                    {index > 0 && (
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => removeEmergencyContact(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              {/* Password Update */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Update Password</h3>
                <div className="space-y-4">
                  <div>
                    <Label className="text-neutral">Current Password</Label>
                    <Input type="password" className="bg-secondary border-primary/20 text-neutral" />
                  </div>
                  <div>
                    <Label className="text-neutral">New Password</Label>
                    <Input type="password" className="bg-secondary border-primary/20 text-neutral" />
                  </div>
                  <div>
                    <Label className="text-neutral">Confirm New Password</Label>
                    <Input type="password" className="bg-secondary border-primary/20 text-neutral" />
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end">
                <Button className="bg-gradient-to-r from-primary to-primary-dark text-secondary-dark">
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

