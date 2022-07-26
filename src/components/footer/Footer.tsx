import React from 'react'
import { useGlobalContext } from '../../context/context'
import './Footer.css'

const Footer = ({
  apply,
  position,
  company,
}: {
  apply: string
  position: string
  company: string
}) => {
  const { isDark } = useGlobalContext()!
  return (
    <footer style={!isDark ? { backgroundColor: 'white' } : {}}>
      {window.innerWidth >= 950 && (
        <div>
          <h2 style={!isDark ? { color: 'var(--secondaryBackground)' } : {}}>
            {position}
          </h2>
          <p>{company}</p>
        </div>
      )}
      <a href={apply} className='apply_btn'>
        Apply Now
      </a>
    </footer>
  )
}

export default Footer
