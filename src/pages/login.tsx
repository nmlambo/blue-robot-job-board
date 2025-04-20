import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ChevronLeft } from 'lucide-react'
import AuthForm from '@/components/auth-form'
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks'
import { checkAuth } from '@/lib/redux/slices/authSlice'

const LoginPage: NextPage = () => {
  const { isAuthenticated } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, router])

  return (
    <>
      <Head>
        <title>Login - SA Job Board</title>
        <meta name="description" content="Login to post new job listings" />
      </Head>
      
      <div className="space-y-6">
        <Link href="/" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          <ChevronLeft className="h-4 w-4" />
          Back to listings
        </Link>
        
        <section className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-primary">Login</h1>
          <p className="text-muted-foreground">Sign in to post new job listings in South Africa</p>
        </section>
        
        <div className="mx-auto max-w-md">
          <AuthForm />
        </div>
      </div>
    </>
  )
}

export default LoginPage