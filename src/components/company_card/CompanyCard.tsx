import React from 'react'
import { logos } from '../../components/Jobcard/logo_imports'
import './CompanyCard.css'

type CompanyCardProps = {
  company: string
  logo: string
  logoBackground: string
  website: string
}

const CompanyCard = ({
  company,
  logo,
  logoBackground,
  website,
}: CompanyCardProps) => {
  return (
    <section className='company_card'>
      <div
        className='card_logo_container'
        style={{ backgroundColor: logoBackground }}
      >
        <img src={logos[logo]} alt='logo' />
      </div>
      <div className='links'>
        <div>
          <h2>{company}</h2>
          <p>{website}</p>
        </div>

        <a href={website}>Company Site</a>
      </div>
    </section>
  )
}

export default CompanyCard
