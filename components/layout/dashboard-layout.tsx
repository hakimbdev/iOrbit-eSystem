"use client"

import type React from "react"

import { useState } from "react"
import {
  BarChart3,
  Building2,
  Users,
  Home,
  Settings,
  LogOut,
  Menu,
  MessageSquare,
  FileText,
  PieChart,
  UserCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: React.ReactNode
  userType: "super-admin" | "admin" | "team"
}

export function DashboardLayout({ children, userType }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = {
    "super-admin": [
      { icon: Home, label: "Dashboard", href: "/dashboard/super-admin" },
      { icon: Building2, label: "Companies", href: "/dashboard/super-admin/companies" },
      { icon: Users, label: "Users", href: "/dashboard/super-admin/users" },
      { icon: BarChart3, label: "Analytics", href: "/dashboard/super-admin/analytics" },
      { icon: Settings, label: "Settings", href: "/dashboard/super-admin/settings" },
    ],
    admin: [
      { icon: Home, label: "Dashboard", href: "/dashboard/admin" },
      { icon: Users, label: "Team", href: "/dashboard/admin/team" },
      { icon: Building2, label: "Properties", href: "/dashboard/admin/properties" },
      { icon: MessageSquare, label: "Messages", href: "/dashboard/admin/messages" },
      { icon: FileText, label: "Documents", href: "/dashboard/admin/documents" },
      { icon: PieChart, label: "Reports", href: "/dashboard/admin/reports" },
      { icon: Settings, label: "Settings", href: "/dashboard/admin/settings" },
    ],
    team: [
      { icon: Home, label: "Dashboard", href: "/dashboard/team" },
      { icon: Building2, label: "Properties", href: "/dashboard/team/properties" },
      { icon: UserCircle, label: "Clients", href: "/dashboard/team/clients" },
      { icon: MessageSquare, label: "Messages", href: "/dashboard/team/messages" },
      { icon: FileText, label: "Documents", href: "/dashboard/team/documents" },
    ],
  }

  const currentMenu = menuItems[userType]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-50 text-gray-800">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-white p-0">
          <SheetHeader className="p-4 border-b">
            <SheetTitle className="text-lg font-bold text-purple-600">iOrbit E-System</SheetTitle>
          </SheetHeader>
          <nav className="mt-4 px-2">
            {currentMenu.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start gap-2 mb-1 text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            ))}
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 mt-4 text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col fixed inset-y-0 w-64 bg-white border-r">
        <div className="p-4 border-b">
          <h1 className="text-lg font-bold text-purple-600">iOrbit E-System</h1>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {currentMenu.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start gap-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>
        <div className="p-4 border-t">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 text-red-500 hover:text-red-600 hover:bg-red-50"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={cn(
          "min-h-screen bg-gray-100",
          "md:ml-64", // Offset for desktop sidebar
        )}
      >
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              {userType === "super-admin"
                ? "Super Admin Dashboard"
                : userType === "admin"
                  ? "Company Admin Dashboard"
                  : "Team Dashboard"}
            </h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  )
}

