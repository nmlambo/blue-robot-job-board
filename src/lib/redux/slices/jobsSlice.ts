import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import type { Job } from '@/types'

export const fetchJobs = createAsyncThunk<Job[]>(
  'jobs/fetchJobs',
  async () => {
    const res = await fetch('/api/jobs')
    if (!res.ok) throw new Error('Failed to fetch jobs')
    return (await res.json()) as Job[]
  }
)

export const postJob = createAsyncThunk<Job, Omit<Job,'id'|'postedAt'>>(
  'jobs/postJob',
  async jobData => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jobData),
    })
    if (!res.ok) throw new Error('Failed to post job')
    return (await res.json()) as Job
  }
)

interface JobsState {
  jobs: Job[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: JobsState = {
  jobs: [],
  status: 'idle',
  error: null,
}

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchJobs.pending, state => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchJobs.fulfilled, (state, action: PayloadAction<Job[]>) => {
        state.status = 'succeeded'
        state.jobs = action.payload
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Failed to load jobs'
      })

    builder
      .addCase(postJob.pending, state => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(postJob.fulfilled, (state, action: PayloadAction<Job>) => {
        state.status = 'succeeded'
        state.jobs = [...state.jobs, action.payload]
      })
      .addCase(postJob.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Failed to post job'
      })
  },
})

export default jobsSlice.reducer
