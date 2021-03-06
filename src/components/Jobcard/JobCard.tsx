import React from 'react'
import { useGlobalContext } from '../../context/context'
import './JobCard.css'
import { logos } from './logo_imports'

type JobCardProps = {
  id: number
  company: string
  logo: string
  logoBackground: string
  position: string
  postedAt: string
  contract: string
  location: string
}

const JobCard = ({
  id,
  company,
  logo,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
}: JobCardProps) => {
  const { isDark } = useGlobalContext()!
  return (
    <section
      className='job_card'
      style={!isDark ? { backgroundColor: 'white' } : {}}
    >
      <div
        className='logo_container'
        style={{ backgroundColor: logoBackground }}
      >
        <img src={logos[logo]} alt='company_logo' className='company_logo' />
      </div>

      <div className='job_card_details'>
        <p>{postedAt}</p>
        <p className='dot'></p>
        <p>{contract}</p>
      </div>

      <h1 style={!isDark ? { color: 'var(--secondaryBackground)' } : {}}>
        {position}
      </h1>

      <div className='job_card_name_and_location'>
        <p>{company}</p>
        <p className='job_card_location'>{location}</p>
      </div>
    </section>
  )
}

export default JobCard
