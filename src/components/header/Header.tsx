import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/desktop/logo.svg'
import sun from '../../assets/desktop/icon-sun.svg'
import moon from '../../assets/desktop/icon-moon.svg'

const Header = () => {
  const [isDark, setIsDark] = useState(true)
  return (
    <header>
      <img src={logo} alt='logo' />

      <div className='theme_switch_container'>
        <img src={sun} alt='sun_logo' />
        <div
          className='theme_switch'
          onClick={() => {
            setIsDark(!isDark)
          }}
        >
          <div
            className='circle'
            style={isDark ? { marginLeft: '60%' } : { marginLeft: '0%' }}
          ></div>
        </div>
        <img src={moon} alt='moon_logo' />
      </div>
    </header>
  )
}

export default Header
