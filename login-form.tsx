"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[460px] space-y-6">
        {/* Logo */}
        <div className="text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/odoo%20login-WXbl1YCm2maxsmiSBiNgxvaIbrEAcV.png"
            alt="Odoo Logo"
            width={120}
            height={45}
            className="mx-auto"
          />
        </div>

        {/* Info Box */}
        <div className="bg-[#e8f4f8] text-[#374151] p-4 rounded-lg text-center text-sm">
          Access and manage your instances from this Odoo account.
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Email" className="h-11" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="text-[#00A09D] hover:text-[#008F8C] text-sm">
                Reset Password
              </Link>
            </div>
            <div className="relative">
              <Input id="password" type={showPassword ? "text" : "password"} className="h-11 pr-12" />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-11 w-11 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </Button>
            </div>
          </div>

          <Button type="submit" className="w-full h-11 bg-[#714B67] hover:bg-[#5D3F56] text-white">
            SIGN IN
          </Button>
        </form>
      </div>
    </div>
  )
}

