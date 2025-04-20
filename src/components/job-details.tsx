"use client"

import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks'
import { fetchJobs } from '@/lib/redux/slices/jobsSlice'
import { Banknote, Building2, Calendar, Clock, Globe, MapPin } from 'lucide-react'

interface JobDetailsProps {
  id: string
}

export default function JobDetails({ id }: JobDetailsProps) {
  const dispatch = useAppDispatch()
  const { jobs, status } = useAppSelector(state => state.jobs)
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchJobs())
    }
  }, [status, dispatch])

  const job = jobs.find(job => job.id === id)

  if (status === 'loading') {
    return (
      <div className="space-y-6">
        <div className="h-8 w-[250px] bg-card/50 animate-pulse rounded" />
        <div className="h-6 w-[200px] bg-card/50 animate-pulse rounded" />
        <div className="h-[400px] w-full bg-card/50 animate-pulse rounded-xl" />
      </div>
    )
  }

  if (status === 'failed' || !job) {
    return (
      <div className="rounded-lg border border-destructive/50 p-4 text-center text-destructive">
        Job not found or failed to load. Please try again later.
      </div>
    )
  }

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow">
      <div className="p-6 space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">{job.title}</h2>
            <div className="flex items-center gap-1 mt-1 text-muted-foreground">
              <Building2 className="h-4 w-4" />
              {job.company}
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-medium w-fit ${
            job.type === "Full-time" 
              ? "bg-primary text-white" 
              : "border border-primary/30 text-primary"
          }`}>
            {job.type}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg border p-3">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <div className="text-sm font-medium">{job.location}</div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border p-3">
            <Banknote className="h-4 w-4 text-muted-foreground" />
            <div className="text-sm font-medium">{job.salary}</div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border p-3">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <div className="text-sm font-medium">{job.postedAt}</div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border p-3">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div className="text-sm font-medium">{job.deadline}</div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Job Description</h3>
          <hr className="my-2.5" />
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p>{job.description}</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Requirements</h3>
          <hr className="my-2.5" />
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <ul>
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Responsibilities</h3>
          <hr className="my-2.5" />
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <ul>
              {job.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto">
            Apply Now
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary/30 bg-background hover:bg-primary/5 text-primary h-10 px-4 py-2 w-full sm:w-auto gap-2">
            <Globe className="h-4 w-4" />
            Visit Company Website
          </button>
        </div>
      </div>
    </div>
  )
}