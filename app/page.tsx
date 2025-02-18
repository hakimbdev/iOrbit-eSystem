import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white shadow-lg">
        <CardContent className="p-8 text-center space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-purple-600">iOrbit eSystem</h1>
            <p className="text-xl text-gray-600">Professional Real Estate Management Platform</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/login" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-md transition duration-200 ease-in-out flex items-center justify-center">
                Login
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/register" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-purple-600 font-semibold py-2 px-6 rounded-md border border-purple-600 transition duration-200 ease-in-out flex items-center justify-center">
                Register
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Streamline your real estate operations with iOrbit eSystem.
              <br />
              For support, contact us at support@iorbit.com
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

