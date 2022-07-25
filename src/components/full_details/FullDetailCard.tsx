import React from 'react'
import './FullDetailCard.css'
import { JobType } from '../../types/types'
import { useGlobalContext } from '../../context/context'

const FullDetailCard = ({
  postedAt,
  contract,
  position,
  location,
  description,
  apply,
  requirements,
  role,
}: JobType) => {
  const { isDark } = useGlobalContext()!
  return (
    <section
      className='full_detail_card'
      style={!isDark ? { backgroundColor: 'white' } : {}}
    >
      <div className='card_head'>
        <div>
          <div className='job_card_details'>
            <p>{postedAt}</p>
            <p className='dot'></p>
            <p>{contract}</p>
          </div>

          <h1 style={!isDark ? { color: 'var(--secondaryBackground)' } : {}}>
            {position}
          </h1>

          <p className='job_card_location'>{location}</p>
        </div>

        <a href={apply} className='apply_btn'>
          Apply Now
        </a>
      </div>

      <p className='description'>{description}</p>

      <div className='requirements'>
        <h1 style={!isDark ? { color: 'var(--secondaryBackground)' } : {}}>
          Requirements
        </h1>
        <p>{requirements.content}</p>
        <ul>
          {requirements.items.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>

      <div className='role'>
        <h1 style={!isDark ? { color: 'var(--secondaryBackground)' } : {}}>
          What You Will Do
        </h1>
        <p>{role.content}</p>
        <ol>
          {role.items.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ol>
      </div>
    </section>
  )
}

export default FullDetailCard
