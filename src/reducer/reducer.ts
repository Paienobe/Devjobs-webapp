import data from '../data/data.json'
import { StateType } from '../types/types'

export const initialState: StateType = data

type FulltimeAction = {
  type: 'FILTER_BY_FULLTIME'
  payload: boolean
}

type TitelOrLocationAction = {
  type: 'FILTER_BY_TITLE' | 'FILTER_BY_LOCATION'
  payload: string
}

type ResetAction = {
  type: 'RESET'
}

export type ActionType = TitelOrLocationAction | FulltimeAction | ResetAction

export const reducer = (state: StateType, action: ActionType) => {
  if (action.type === 'FILTER_BY_FULLTIME') {
    if (action.payload) {
      const fullTimeJobs = state.filter((job) => {
        return job.contract.toLowerCase() === 'full time'
      })
      return fullTimeJobs
    }
    return initialState
  } else if (action.type === 'FILTER_BY_TITLE') {
    if (action.payload) {
      const jobsWithTitle = initialState.filter((job) => {
        return job.position.toLowerCase().includes(action.payload.toLowerCase())
      })

      if (jobsWithTitle.length > 0) {
        return jobsWithTitle
      } else {
        return initialState
      }
    }
    return state
  } else if (action.type === 'RESET') {
    return initialState
  }
  return state
}
