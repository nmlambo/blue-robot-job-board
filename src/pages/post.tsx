import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ChevronLeft } from 'lucide-react'
import JobForm from '@/components/job-form'
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks'
import { checkAuth } from '@/lib/redux/slices/authSlice'

const PostJobPage: NextPage = () => {
  const { isAuthenticated } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  return (
    <>
      <Head>
        <title>Post a Job - SA Job Board</title>
        <meta name="description" content="Post a new job listing on SA Job Board" />
      </Head>
      
      <div className="space-y-6">
        <Link href="/" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          <ChevronLeft className="h-4 w-4" />
          Back to listings
        </Link>
        
        <section className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-primary">Post a New Job in South Africa</h1>
          <p className="text-muted-foreground">
            Fill out the form below to create a new job listing for the South African market
          </p>
        </section>
        
        <JobForm />
      </div>
    </>
  )
}

export default PostJobPage