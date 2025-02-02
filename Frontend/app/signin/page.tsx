"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { loginUser } from "@/utils/api"
import { setUser, setToken } from "@/utils/storage"


export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [adminId, setAdminId] = useState("")
  const [adminPassword, setAdminPassword] = useState("")

  const handleUserSubmit =async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the user sign-in logic
    try {
      const credentials = { email, password }
      const response = await loginUser(credentials)
      setToken(response.token)
      setUser(response.user)
      console.log(response)
      alert("User signed in successfully")
    } catch (error) {
      console.error(error)
      alert("An error occurred while signing in")
    }
    console.log("User sign in with:", email, password)
  }

  const handleAdminSubmit =async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the admin sign-in logic
    try {
      const credentials = { email:adminId,password: adminPassword }
      const response = await loginUser(credentials)
      setToken(response.token)
      setUser(response.user)
      alert("Admin signed in successfully")
    } catch (error) {
      alert("An error occurred while signing in")
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 12, 16, 0.8), rgba(31, 40, 51, 0.8)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nb5.jpg-GfYY6lGUqnCV9aTJZYxDYQd2s4PRJp.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 pointer-events-none" />

      <Card className="w-full max-w-md bg-secondary-dark/80 backdrop-blur-md border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-gold">Welcome Back</CardTitle>
          <CardDescription className="text-center text-neutral">Sign in to your Nexabot account</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="user" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-secondary">
              <TabsTrigger
                value="user"
                className="data-[state=active]:bg-primary data-[state=active]:text-secondary-dark"
              >
                User
              </TabsTrigger>
              <TabsTrigger
                value="admin"
                className="data-[state=active]:bg-gold data-[state=active]:text-secondary-dark"
              >
                Admin
              </TabsTrigger>
            </TabsList>
            <TabsContent value="user">
              <form onSubmit={handleUserSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-neutral">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-secondary border-primary/20 text-neutral placeholder:text-neutral/50 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-neutral">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-secondary border-primary/20 text-neutral placeholder:text-neutral/50 focus-visible:ring-primary"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-dark text-secondary-dark hover:opacity-90"
                >
                  Sign In
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="admin">
              <form onSubmit={handleAdminSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="adminId" className="text-neutral">
                    Admin Email
                  </Label>
                  <Input
                    id="adminId"
                    type="text"
                    placeholder="Enter admin ID"
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                    required
                    className="bg-secondary border-primary/20 text-neutral placeholder:text-neutral/50 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="adminPassword" className="text-neutral">
                    Admin Password
                  </Label>
                  <Input
                    id="adminPassword"
                    type="password"
                    placeholder="Enter admin password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    required
                    className="bg-secondary border-primary/20 text-neutral placeholder:text-neutral/50 focus-visible:ring-primary"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold to-yellow-600 text-secondary-dark hover:opacity-90"
                >
                  Admin Sign In
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2">
          <Link href="/forgot-password" className="text-sm text-primary hover:text-primary-dark">
            Forgot your password?
          </Link>
          <p className="text-sm text-neutral">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:text-primary-dark">
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

