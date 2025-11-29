import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { createClient } from '@/lib/supabase/server'

async function signOut() {
  'use server'

  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/login')
}

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground">You are signed in with {user.email ?? 'your account'}.</p>
          </div>
          <form action={signOut}>
            <Button type="submit" variant="outline">
              Sign out
            </Button>
          </form>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Account snapshot</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-between text-foreground">
                <span>Email</span>
                <span className="font-medium">{user.email ?? '—'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>User ID</span>
                <span className="font-mono text-xs text-foreground">{user.id}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Confirmed</span>
                <span className="font-medium text-foreground">{user.email_confirmed_at ? 'Yes' : 'Pending'}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Next steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Use this area as a starting point for your app experience.</p>
              <ul className="list-disc space-y-1 pl-4">
                <li>Connect Google or Apple via the social buttons on login.</li>
                <li>Manage your profile data in Supabase auth settings.</li>
                <li>Extend this dashboard with product-specific metrics.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
