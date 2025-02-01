"use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
// import Link from "next/link"

// export default function SignUp() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [confirmPassword, setConfirmPassword] = useState("")

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Here you would typically handle the sign-up logic
//     console.log("Sign up with:", email, password)
//   }

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center px-4 relative"
//       style={{
//         backgroundImage: `linear-gradient(rgba(11, 12, 16, 0.8), rgba(31, 40, 51, 0.8)), url('${encodeURI("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nb5.jpg-bDmffG3uXWwOEi704AuyMSCqOR5x4u.jpeg")}')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-gold/10 pointer-events-none" />

//       <Card className="w-full max-w-md bg-black text-white backdrop-blur-md border-primary/20">
//         <CardHeader>
//           <CardTitle className="text-2xl text-center text-gradient-nexabot">Create an Account</CardTitle>
//           <CardDescription className="text-center text-white">Join Nexabot for personalized mental health support</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2 text-neutral">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="bg-secondary border-primary/20 text-neutral"
//               />
//             </div>
//             <div className="space-y-2 text-neutral">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="Create a password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="bg-secondary border-primary/20 text-neutral"
//               />
//             </div>
//             <div className="space-y-2 text-neutral">
//               <Label htmlFor="confirm-password">Confirm Password</Label>
//               <Input
//                 id="confirm-password"
//                 type="password"
//                 placeholder="Confirm your password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//                 className="bg-secondary border-primary/20 text-neutral"
//               />
//             </div>
//             <Button type="submit" className="w-full bg-gradient-to-r from-primary to-primary-dark text-secondary-dark">
//               Sign Up
//             </Button>
//           </form>
//         </CardContent>
//         <CardFooter className="flex justify-center">
//           <p className="text-sm text-neutral">
//             Already have an account?{" "}
//             <Link href="/signin" className="text-primary hover:underline">
//               Sign In
//             </Link>
//           </p>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

export default function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [emergencyContactName, setEmergencyContactName] = useState("")
  const [emergencyContactNumber, setEmergencyContactNumber] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isAgreed, setIsAgreed] = useState(false)  // State for checkbox agreement

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!isAgreed) {
      alert("You must agree to the terms to continue.")
      return
    }

    // Log the data for user creation
    console.log("Sign up with:", name, email, phoneNumber, emergencyContactName, emergencyContactNumber, isAdmin)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 12, 16, 0.8), rgba(31, 40, 51, 0.8)), url('${encodeURI("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nb5.jpg-bDmffG3uXWwOEi704AuyMSCqOR5x4u.jpeg")}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-gold/10 pointer-events-none" />

      <Card className="w-full max-w-md bg-black text-white backdrop-blur-md border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-gradient-nexabot">Create an Account</CardTitle>
          <CardDescription className="text-center text-white">Join Nexabot for personalized mental health support</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2 text-neutral">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-secondary border-primary/20 text-neutral"
              />
            </div>
            <div className="space-y-2 text-neutral">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-secondary border-primary/20 text-neutral"
              />
            </div>
            <div className="space-y-2 text-neutral">
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input
                id="phone-number"
                type="text"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="bg-secondary border-primary/20 text-neutral"
              />
            </div>
            <div className="space-y-2 text-neutral">
              <Label htmlFor="emergency-contact-name">Emergency Contact Name</Label>
              <Input
                id="emergency-contact-name"
                type="text"
                placeholder="Enter emergency contact name"
                value={emergencyContactName}
                onChange={(e) => setEmergencyContactName(e.target.value)}
                required
                className="bg-secondary border-primary/20 text-neutral"
              />
            </div>
            <div className="space-y-2 text-neutral">
              <Label htmlFor="emergency-contact-number">Emergency Contact Number</Label>
              <Input
                id="emergency-contact-number"
                type="text"
                placeholder="Enter emergency contact number"
                value={emergencyContactNumber}
                onChange={(e) => setEmergencyContactNumber(e.target.value)}
                required
                className="bg-secondary border-primary/20 text-neutral"
              />
            </div>
            <div className="space-y-2 text-neutral">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-secondary border-primary/20 text-neutral"
              />
            </div>
            <div className="space-y-2 text-neutral">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="bg-secondary border-primary/20 text-neutral"
              />
            </div>

            {/* Checkbox for agreement */}
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="agreement-checkbox" 
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)} 
                className="h-5 w-5"
              />
              <Label htmlFor="agreement-checkbox" className="text-neutral text-sm">
                You agree to keep your health in check and that your emergency contact can be used in case of emergency.
              </Label>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary to-primary-dark text-secondary-dark"
            >
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-neutral">
            Already have an account?{" "}
            <Link href="/signin" className="text-primary hover:underline">
              Sign In
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}


