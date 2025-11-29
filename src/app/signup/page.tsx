import Link from 'next/link'
import { AuthForm } from '@/components/auth/auth-form'

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">Create your account</h2>
          <p className="text-sm text-muted-foreground">Join Cumulus to access your dashboard.</p>
        </div>
        <AuthForm initialTab="signup" redirectPath="/dashboard" />
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
