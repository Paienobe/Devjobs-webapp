import React, { useState } from 'react'
import Filter from '../components/filter/Filter'
import JobCard from '../components/Jobcard/JobCard'
import { useGlobalContext } from '../context/context'
import { Link } from 'react-router-dom'

const Home = () => {
  const globalContext = useGlobalContext()
  const [shownJobs, setShownJobs] = useState(8)
  const jobs = globalContext?.state.slice(0, shownJobs)

  return (
    <main className='home'>
      <Filter />
      <section className='jobs_container'>
        {jobs?.map((job) => {
          return (
            <Link to={`/jobs/${job.company}`} key={job.id}>
              <JobCard {...job} />
            </Link>
          )
        })}
      </section>
      {shownJobs <= 8 && (
        <button
          className='more_btn'
          onClick={() => {
            setShownJobs(shownJobs + 10)
          }}
        >
          SHOW MORE
        </button>
      )}
    </main>
  )
}

export default Home
