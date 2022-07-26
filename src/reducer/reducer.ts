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

export type ActionType = TitelOrLocationAction | FulltimeAction

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
    }
    return state
  }
  return state
}
