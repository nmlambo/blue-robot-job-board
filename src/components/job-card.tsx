import Link from "next/link"
import type { Job } from "@/types"
import { Banknote, Building2, Clock, MapPin } from 'lucide-react'

interface JobCardProps {
  job: Job
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="h-full rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md">
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-primary line-clamp-1">{job.title}</h3>
            <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
              <Building2 className="h-3.5 w-3.5" />
              {job.company}
            </div>
          </div>
          <div className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
            job.type === "Full-time" 
              ? "bg-primary text-white" 
              : "border border-primary/30 text-primary"
          }`}>
            {job.type}
          </div>
        </div>
        
        <p className="line-clamp-3 text-sm text-muted-foreground">{job.description}</p>
        
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {job.location}
          </div>
          <div className="flex items-center gap-1">
            <Banknote className="h-3.5 w-3.5" />
            {job.salary}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {job.postedAt}
          </div>
        </div>
        
        <Link 
          href={`/jobs/${job.id}`}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}