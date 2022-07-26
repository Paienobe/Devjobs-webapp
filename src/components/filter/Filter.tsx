import React, { useEffect, useState } from 'react'
import './Filter.css'
import filterIcon from '../../assets/mobile/icon-filter.svg'
import searchIcon from '../../assets/desktop/icon-search.svg'
import searchIconPurple from '../../assets/desktop/icon-search-purple.svg'
import checked from '../../assets/desktop/icon-check.svg'
import locationIcon from '../../assets/desktop/icon-location.svg'
import { useGlobalContext } from '../../context/context'

const Filter = () => {
  const [] = useState(false)
  const {
    isDark,
    showExtraFilters,
    setShowExtraFilters,
    dispatch,
    isFullTime,
    setIsFullTime,
  } = useGlobalContext()!

  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')

  const filterByFulltime = () => {
    dispatch({ type: 'FILTER_BY_FULLTIME', payload: !isFullTime })
  }

  const filterByTitle = () => {
    dispatch({ type: 'FILTER_BY_TITLE', payload: title })
  }

  const reset = () => {
    dispatch({ type: 'RESET' })
  }

  useEffect(() => {
    if (!title && !location) {
      reset()
    }
  }, [title, location])

  return (
    <section
      className='filter'
      style={!isDark ? { backgroundColor: 'white' } : {}}
    >
      <div className='main_filter'>
        {window.innerWidth >= 640 && (
          <img
            src={searchIconPurple}
            alt='search_icon'
            onClick={() => {
              window.innerWidth < 640 && setShowExtraFilters(true)
            }}
          />
        )}
        <input
          type='text'
          placeholder='Filter by title...'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <div className='filter_options'>
          {window.innerWidth < 640 && (
            <img
              src={filterIcon}
              alt='filter_icon'
              onClick={() => {
                window.innerWidth < 640 && setShowExtraFilters(true)
              }}
            />
          )}
          {window.innerWidth < 640 && (
            <div
              className='search_btn'
              onClick={() => {
                filterByTitle()
              }}
            >
              <img src={searchIcon} alt='search' />
            </div>
          )}
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
              window.innerWidth < 640 && setShowExtraFilters(true)
            } else {
              window.innerWidth < 640 && setShowExtraFilters(false)
            }
          }}
        >
          <div
            className='more_options'
            style={!isDark ? { backgroundColor: 'white' } : {}}
          >
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
              <div
                className='check_box'
                onClick={() => {
                  setIsFullTime(!isFullTime)
                  filterByFulltime()
                }}
                style={
                  isFullTime
                    ? {
                        background: 'var(--purpleColor)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxSizing: 'border-box',
                        padding: '.25rem',
                      }
                    : {}
                }
              >
                {isFullTime && (
                  <img src={checked} alt='' style={{ width: '100%' }} />
                )}
              </div>
              <p style={!isDark ? { color: 'var(--secondaryBackground)' } : {}}>
                Full Time
              </p>
            </div>

            <button className='second_search'>Search</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Filter
