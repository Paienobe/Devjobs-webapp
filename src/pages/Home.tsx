import React, { useEffect, useState } from 'react'
import Filter from '../components/filter/Filter'
import JobCard from '../components/Jobcard/JobCard'
import { useGlobalContext } from '../context/context'
import { Link } from 'react-router-dom'

const Home = () => {
  const globalContext = useGlobalContext()
  const { isFullTime } = useGlobalContext()!
  const [shownJobs, setShownJobs] = useState(8)
  const jobs = globalContext?.state.slice(0, shownJobs)

  useEffect(() => {
    window.innerWidth >= 950 && setShownJobs(shownJobs + 10)
  })

  return (
    <main className='home'>
      <div className='filter_main_container'>
        <Filter />
      </div>
      <section className='jobs_container'>
        {jobs?.map((job) => {
          return (
            <Link to={`/jobs/${job.company}`} key={job.id}>
              <JobCard {...job} />
            </Link>
          )
        })}
      </section>
      {shownJobs <= 8 && !isFullTime && (
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
