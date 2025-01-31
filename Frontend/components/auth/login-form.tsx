"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LoginForm() {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <Card className="w-[400px] shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold text-secondary">Welcome to Nexabot</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="user" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="user" onClick={() => setIsAdmin(false)}>
              User
            </TabsTrigger>
            <TabsTrigger value="admin" onClick={() => setIsAdmin(true)}>
              Admin
            </TabsTrigger>
          </TabsList>
          <TabsContent value="user">
            <form className="space-y-4">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button className="w-full bg-primary hover:bg-primary/90">Login as User</Button>
            </form>
          </TabsContent>
          <TabsContent value="admin">
            <form className="space-y-4">
              <Input type="email" placeholder="Admin Email" />
              <Input type="password" placeholder="Admin Password" />
              <Button className="w-full bg-secondary hover:bg-secondary/90">Login as Admin</Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

