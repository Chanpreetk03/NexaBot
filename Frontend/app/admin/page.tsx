"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen, Calendar, Users, Settings, LogOut } from "lucide-react"
import { Logo } from "@/components/logo"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [adminId, setAdminId] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (adminId === "Admin" && password === "Admin@123") {
      setIsAuthenticated(true)
    } else {
      alert("Invalid credentials")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary-dark">
        <Card className="w-[400px] bg-secondary-dark/80 backdrop-blur-md border-primary/20">
          <CardHeader>
            <Logo className="mx-auto mb-6" />
            <CardTitle className="text-center text-gradient-nexabot">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label className="text-neutral">Admin ID</Label>
                <Input
                  value={adminId}
                  onChange={(e) => setAdminId(e.target.value)}
                  className="bg-secondary border-primary/20 text-neutral"
                />
              </div>
              <div>
                <Label className="text-neutral">Password</Label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-secondary border-primary/20 text-neutral"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary-dark text-secondary-dark"
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary-dark">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Logo />
          <Button
            variant="outline"
            className="text-primary border-primary hover:bg-primary/10"
            onClick={() => setIsAuthenticated(false)}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="resources">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger
              value="resources"
              className="data-[state=active]:bg-primary data-[state=active]:text-secondary-dark"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Resources
            </TabsTrigger>
            <TabsTrigger
              value="events"
              className="data-[state=active]:bg-primary data-[state=active]:text-secondary-dark"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Events
            </TabsTrigger>
            <TabsTrigger
              value="therapists"
              className="data-[state=active]:bg-primary data-[state=active]:text-secondary-dark"
            >
              <Users className="w-4 h-4 mr-2" />
              Therapists
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-primary data-[state=active]:text-secondary-dark"
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="resources">
            <Card className="bg-secondary-dark/80 backdrop-blur-md border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Manage Resources</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Resource management form */}
                <p className="text-neutral">Resource management interface will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events">
            <Card className="bg-secondary-dark/80 backdrop-blur-md border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Manage Events</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Event management form */}
                <p className="text-neutral">Event management interface will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="therapists">
            <Card className="bg-secondary-dark/80 backdrop-blur-md border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Manage Therapists</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Therapist management form */}
                <p className="text-neutral">Therapist management interface will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="bg-secondary-dark/80 backdrop-blur-md border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Admin Settings</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Admin settings form */}
                <p className="text-neutral">Admin settings interface will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

