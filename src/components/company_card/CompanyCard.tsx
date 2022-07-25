import React from 'react'
import { logos } from '../../components/Jobcard/logo_imports'
import { useGlobalContext } from '../../context/context'
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
  const { isDark } = useGlobalContext()!
  return (
    <section
      className='company_card'
      style={!isDark ? { backgroundColor: 'white' } : {}}
    >
      <div
        className='card_logo_container'
        style={{ backgroundColor: logoBackground }}
      >
        <img src={logos[logo]} alt='logo' />
      </div>
      <div className='links'>
        <div>
          <h2 style={!isDark ? { color: 'var(--secondaryBackground)' } : {}}>
            {company}
          </h2>
          <p>{website}</p>
        </div>

        <a
          href={website}
          style={!isDark ? { backgroundColor: 'var(--textColor)' } : {}}
        >
          Company Site
        </a>
      </div>
    </section>
  )
}

export default CompanyCard
