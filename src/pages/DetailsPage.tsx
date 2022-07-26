import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/context'
import { useParams, useLocation } from 'react-router-dom'
import CompanyCard from '../components/company_card/CompanyCard'
import FullDetailCard from '../components/full_details/FullDetailCard'
import Footer from '../components/footer/Footer'

const DetailsPage = () => {
  const globalContext = useGlobalContext()
  const jobs = globalContext?.state!
  const companyName = useParams()!.company!.toLowerCase()

  const selectedJob = jobs!.find((job) => {
    return job.company.toLowerCase() === companyName
  })

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    console.log(location)
  }, [location])

  return (
    <>
      <div className='details_page'>
        <CompanyCard {...selectedJob!} />
        <FullDetailCard {...selectedJob!} />
      </div>
      <Footer {...selectedJob!} />
    </>
  )
}

export default DetailsPage
