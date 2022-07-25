import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../assets/desktop/logo.svg'
import sun from '../../assets/desktop/icon-sun.svg'
import moon from '../../assets/desktop/icon-moon.svg'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/context'

const Header = () => {
  const { isDark, setIsDark } = useGlobalContext()!
  return (
    <header>
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>

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
