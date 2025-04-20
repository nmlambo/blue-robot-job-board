"use client"

import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks'
import { fetchJobs } from '@/lib/redux/slices/jobsSlice'
import JobCard from "@/components/job-card"

export default function JobList() {
  const dispatch = useAppDispatch()
  const { jobs, status, error } = useAppSelector(state => state.jobs)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchJobs())
    }
  }, [status, dispatch])

  if (status === 'loading') {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-[300px] w-full rounded-lg border bg-card/50 animate-pulse" />
        ))}
      </div>
    )
  }

  if (status === 'failed') {
    return (
      <div className="rounded-lg border border-destructive/50 p-4 text-center text-destructive">
        {error ?? "Failed to load jobs. Please try again later."}
      </div>
    )
  }
  

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}