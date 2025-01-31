"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserCircle, Plus, Trash2 } from "lucide-react"
import Image from "next/image"

interface ProfileSettingsProps {
  user?: {
    name: string
    email: string
    phone: string
    image?: string
  }
}

export function ProfileSettings({ user }: ProfileSettingsProps) {
  const [image, setImage] = useState<string | null>(user?.image || null)
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

  const handleEmergencyContactChange = (index: number, field: "name" | "phone", value: string) => {
    const updatedContacts = emergencyContacts.map((contact, i) => {
      if (i === index) {
        return { ...contact, [field]: value }
      }
      return contact
    })
    setEmergencyContacts(updatedContacts)
  }

  return (
    <Card className="bg-secondary-dark/80 backdrop-blur-md border-primary/20">
      <CardHeader>
        <CardTitle className="text-primary">Profile Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
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

        <div className="space-y-4">
          <div>
            <Label className="text-neutral">Full Name</Label>
            <Input defaultValue={user?.name} className="bg-secondary border-primary/20 text-neutral" />
          </div>
          <div>
            <Label className="text-neutral">Email</Label>
            <Input type="email" defaultValue={user?.email} className="bg-secondary border-primary/20 text-neutral" />
          </div>
          <div>
            <Label className="text-neutral">Phone</Label>
            <Input type="tel" defaultValue={user?.phone} className="bg-secondary border-primary/20 text-neutral" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-neutral">Emergency Contacts</Label>
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
              <Input
                placeholder="Contact Name"
                value={contact.name}
                onChange={(e) => handleEmergencyContactChange(index, "name", e.target.value)}
                className="bg-secondary border-primary/20 text-neutral"
              />
              <Input
                placeholder="Contact Phone"
                value={contact.phone}
                onChange={(e) => handleEmergencyContactChange(index, "phone", e.target.value)}
                className="bg-secondary border-primary/20 text-neutral"
              />
              {index > 0 && (
                <Button type="button" variant="destructive" size="icon" onClick={() => removeEmergencyContact(index)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end space-x-2">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Cancel
          </Button>
          <Button className="bg-gradient-to-r from-primary to-primary-dark text-secondary-dark">Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  )
}

