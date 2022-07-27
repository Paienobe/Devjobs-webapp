import React, { useEffect, useState } from 'react'
import Filter from '../components/filter/Filter'
import JobCard from '../components/Jobcard/JobCard'
import { useGlobalContext } from '../context/context'
import { Link } from 'react-router-dom'

const Home = () => {
  const { isFullTime, state } = useGlobalContext()!
  const [shownJobs, setShownJobs] = useState(Math.ceil(state.length / 2))
  const jobs = state.slice(0, shownJobs)

  useEffect(() => {
    window.innerWidth >= 950 && setShownJobs(state.length)
  }, [])

  return (
    <main className='home'>
      <div className='filter_main_container'>
        <Filter />
      </div>
      {state.length > 0 ? (
        <section className='jobs_container'>
          {jobs?.map((job) => {
            return (
              <Link to={`/jobs/${job.company}`} key={job.id}>
                <JobCard {...job} />
              </Link>
            )
          })}
        </section>
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <h1>No jobs found</h1>
        </div>
      )}
      {shownJobs < state.length && (
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
