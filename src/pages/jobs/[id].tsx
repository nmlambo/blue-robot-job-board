import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChevronLeft } from 'lucide-react'
import JobDetails from '@/components/job-details'
import { useAppSelector } from '@/lib/redux/hooks'

const JobPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { jobs } = useAppSelector(state => state.jobs)
  
  // Finds the job for meta tags
  const job = jobs.find(job => job.id === id)
  
  return (
    <>
      <Head>
        <title>{job ? `${job.title} at ${job.company}` : 'Job Details'} - SA Job Board</title>
        <meta 
          name="description" 
          content={job ? `${job.title} job opportunity at ${job.company} in ${job.location}` : 'View job details'} 
        />
      </Head>
      
      <div className="space-y-6">
        <Link href="/" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          <ChevronLeft className="h-4 w-4" />
          Back to listings
        </Link>
        
        <JobDetails id={id as string} />
      </div>
    </>
  )
}

export default JobPage