import { createContext, ReactNode, useContext, useReducer } from 'react'
import { ActionType, initialState, reducer } from '../reducer/reducer'
import { StateType } from '../types/types'

type AppProviderProps = {
  children: ReactNode
}

type AppContextType = {
  state: StateType
  dispatch: React.Dispatch<ActionType>
}

export const AppContext = createContext<AppContextType | null>(null)

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}