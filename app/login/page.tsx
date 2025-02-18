"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  const [selectedUserType, setSelectedUserType] = useState<"super-admin" | "admin" | "team" | null>(null)

  if (selectedUserType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center p-4">
        <LoginForm
          userType={selectedUserType}
          title={`${selectedUserType.charAt(0).toUpperCase() + selectedUserType.slice(1)} Login`}
          description={`Access your ${selectedUserType} dashboard`}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg">
        <CardContent className="p-6 text-center space-y-6">
          <h2 className="text-2xl font-bold text-purple-600">Select Login Type</h2>
          <div className="space-y-3">
            <Button
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => setSelectedUserType("super-admin")}
            >
              Super Admin Login
            </Button>
            <Button
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => setSelectedUserType("admin")}
            >
              Company Admin Login
            </Button>
            <Button
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => setSelectedUserType("team")}
            >
              Team Member Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

