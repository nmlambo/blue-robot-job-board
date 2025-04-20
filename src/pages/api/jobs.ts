import type { NextApiRequest, NextApiResponse } from 'next'
import type { Job } from '@/types'
import { mockJobs } from '@/services/api'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    res.status(200).json(mockJobs)
  } else if (req.method === 'POST') {

    const jobData = req.body
    
    if (!jobData.title || !jobData.company || !jobData.location) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    
    const newJob: Job = {
      ...jobData,
      id: String(mockJobs.length + 1),
      postedAt: 'Just now',
    }
    
    mockJobs.push(newJob)
    res.status(201).json(newJob)
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}