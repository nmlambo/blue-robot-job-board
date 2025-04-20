import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { Job } from '@/types'
import { fetchJobs as fetchJobsApi, postJob as postJobApi } from '@/services/api'

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

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  return await fetchJobsApi()
})

export const postJob = createAsyncThunk(
  'jobs/postJob',
  async (jobData: Omit<Job, 'id' | 'postedAt'>) => {
    return await postJobApi(jobData)
  }
)

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.jobs = action.payload
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to fetch jobs'
      })
      .addCase(postJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload)
      })
  },
})

export default jobsSlice.reducer