import { LoginForm } from "@/components/auth/login-form"

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <LoginForm
        userType="admin"
        title="Company Admin Login"
        description="Access your company's management dashboard"
      />
    </div>
  )
}

