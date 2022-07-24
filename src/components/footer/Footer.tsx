import React from 'react'
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
  return (
    <footer>
      <div>
        <h2>{position}</h2>
        <p>{company}</p>
      </div>
      <a href={apply} className='apply_btn'>
        Apply Now
      </a>
    </footer>
  )
}

export default Footer
