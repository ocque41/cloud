import { redirect } from 'next/navigation'
import { UpdatePasswordForm } from '@/components/auth/update-password-form'
import { createClient } from '@/lib/supabase/server'

export default async function UpdatePasswordPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Reset your password</h1>
          <p className="text-sm text-muted-foreground">Set a new password to access your dashboard.</p>
        </div>
        <UpdatePasswordForm />
      </div>
    </div>
  )
}
