import { LoginForm } from "@/components/auth/login-form"

export default function SuperAdminLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <LoginForm
        userType="super-admin"
        title="Super Admin Login"
        description="Access the iOrbit system management dashboard"
      />
    </div>
  )
}

