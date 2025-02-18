"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RegisterForm } from "@/components/auth/register-form"

export default function RegisterPage() {
  const [selectedUserType, setSelectedUserType] = useState<"company" | "team" | null>(null)

  if (selectedUserType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center p-4">
        <RegisterForm
          userType={selectedUserType}
          title={`Register as ${selectedUserType === "company" ? "Company" : "Team Member"}`}
          description={`Create your ${selectedUserType} account`}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg">
        <CardContent className="p-6 text-center space-y-6">
          <h2 className="text-2xl font-bold text-purple-600">Select Registration Type</h2>
          <div className="space-y-3">
            <Button
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => setSelectedUserType("company")}
            >
              Register Company
            </Button>
            <Button
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => setSelectedUserType("team")}
            >
              Register as Team Member
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

