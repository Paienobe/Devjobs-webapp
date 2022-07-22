import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { ActionType, initialState, reducer } from '../reducer/reducer'
import { StateType } from '../types/types'

type AppProviderProps = {
  children: ReactNode
}

type AppContextType = {
  state: StateType
  dispatch: React.Dispatch<ActionType>
  showExtraFilters: Boolean
  setShowExtraFilters: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = createContext<AppContextType | null>(null)

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [showExtraFilters, setShowExtraFilters] = useState(false)

  useEffect(() => {
    if (showExtraFilters) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'unset'
    }
  }, [showExtraFilters])

  return (
    <AppContext.Provider
      value={{ state, dispatch, showExtraFilters, setShowExtraFilters }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
