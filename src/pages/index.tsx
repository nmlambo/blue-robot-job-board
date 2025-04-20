import type { NextPage } from 'next'
import Head from 'next/head'
import JobList from '@/components/job-list'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SA Job Board - Find Your Next Career in South Africa</title>
        <meta name="description" content="Browse the latest job opportunities across South Africa" />
      </Head>
      
      <div className="space-y-6">
        <section className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-primary">South African Job Listings</h1>
          <p className="text-muted-foreground">
            Browse through our curated list of job opportunities across South Africa
          </p>
        </section>
        <JobList />
      </div>
    </>
  )
}

export default Home