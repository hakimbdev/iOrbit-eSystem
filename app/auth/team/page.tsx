import { LoginForm } from "@/components/auth/login-form"

export default function TeamLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <LoginForm userType="team" title="Team Member Login" description="Access your team dashboard and tools" />
    </div>
  )
}

