import React from 'react'
import './Filter.css'
import filterIcon from '../../assets/mobile/icon-filter.svg'
import searchIcon from '../../assets/desktop/icon-search.svg'

const Filter = () => {
  return (
    <section className='filter'>
      <input type='text' placeholder='Filter by title...' />
      <div className='filter_options'>
        <img src={filterIcon} alt='filter_icon' />
        <div className='search_btn'>
          <img src={searchIcon} alt='search' />
        </div>
      </div>
    </section>
  )
}

export default Filter
