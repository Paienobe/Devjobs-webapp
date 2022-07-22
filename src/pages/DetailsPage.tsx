import React from 'react'
import { useGlobalContext } from '../context/context'
import { useParams } from 'react-router-dom'
import CompanyCard from '../components/company_card/CompanyCard'
import { JobType } from '../types/types'
import FullDetailCard from '../components/full_details/FullDetailCard'
import Footer from '../components/footer/Footer'

const DetailsPage = () => {
  const globalContext = useGlobalContext()
  const jobs = globalContext?.state!
  const companyName = useParams()!.company!.toLowerCase()

  const selectedJob = jobs!.find((job) => {
    return job.company.toLowerCase() === companyName
  })

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
