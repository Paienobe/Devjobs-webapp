import data from '../data/data.json'
import { StateType } from '../types/types'

export const initialState: StateType = data

export type ActionType = {
  type: 'FILTER_BY_TITLE' | 'FILTER_BY_LOCATION'
}

export const reducer = (state: StateType, action: ActionType) => {
  return state
}
