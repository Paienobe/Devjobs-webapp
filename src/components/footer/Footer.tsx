import React from 'react'
import './Footer.css'

const Footer = ({ apply }: { apply: string }) => {
  return (
    <footer>
      <a href={apply} className='apply_btn'>
        Apply Now
      </a>
    </footer>
  )
}

export default Footer
