import Link from 'next/link'
import { AuthForm } from '@/components/auth/auth-form'

export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.14),transparent_26%),radial-gradient(circle_at_60%_80%,rgba(59,130,246,0.18),transparent_24%)]">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#0c0c0f,#111018,#0d0d12)]" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_0%,rgba(14,165,233,0)_60%)] blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 py-12 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Cumulus account
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">Log in to Cumulus</h1>
              <p className="max-w-xl text-base text-muted-foreground">
                Access your dashboard with fast, email-first authentication. No social noise - just a clear path to your data.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[{ title: 'Email-only security', body: 'Use your work email and keep access tight.' }, { title: 'Password recovery', body: 'Reset links go straight to your inbox.' }, { title: 'One destination', body: 'Confirmation emails land on cumulush.com.' }, { title: 'Human support', body: 'Questions? We are here to help.' }].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted-foreground shadow-[0_12px_50px_rgba(0,0,0,0.35)]">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-foreground">
                i
              </span>
              <p className="leading-relaxed">
                Need a new account?{' '}
                <Link href="/signup" className="font-medium text-foreground underline underline-offset-4">
                  Create one here
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.2),transparent_30%)] blur-3xl" aria-hidden />
            <div className="relative rounded-[28px] border border-white/10 bg-[#0f0f11]/80 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">Email login</p>
                  <h2 className="text-2xl font-semibold text-foreground">Welcome back</h2>
                  <p className="text-sm text-muted-foreground">Sign in to continue to your dashboard.</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground">
                  Secure by Supabase
                </div>
              </div>
              <AuthForm initialTab="login" redirectPath="/dashboard" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
