import React from 'react'
import './Filter.css'
import filterIcon from '../../assets/mobile/icon-filter.svg'
import searchIcon from '../../assets/desktop/icon-search.svg'
import locationIcon from '../../assets/desktop/icon-location.svg'
import { useGlobalContext } from '../../context/context'
import { log } from 'console'

const Filter = () => {
  const globalContext = useGlobalContext()
  const showExtraFilters = globalContext?.showExtraFilters
  const setShowExtraFilters = globalContext?.setShowExtraFilters!
  return (
    <section className='filter'>
      <input type='text' placeholder='Filter by title...' />
      <div className='filter_options'>
        <img
          src={filterIcon}
          alt='filter_icon'
          onClick={() => {
            setShowExtraFilters(true)
          }}
        />
        <div className='search_btn'>
          <img src={searchIcon} alt='search' />
        </div>
      </div>

      {showExtraFilters && (
        <div
          className='extra_options_container'
          onClick={(e) => {
            if (
              (e.target as Element).classList.value === 'location_input' ||
              (e.target as Element).classList.value === 'check_box' ||
              (e.target as Element).classList.value === 'second_search'
            ) {
              setShowExtraFilters(true)
            } else {
              setShowExtraFilters(false)
            }
          }}
        >
          <div className='more_options'>
            <div className='location'>
              <img src={locationIcon} alt='location_icon' />
              <input
                type='text'
                placeholder='Filter by location...'
                className='location_input'
              />
            </div>

            <hr />

            <div className='full_time'>
              <div className='check_box'></div>
              <p>Full Time</p>
            </div>

            <button className='second_search'>Search</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Filter
