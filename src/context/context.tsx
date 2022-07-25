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
  isDark: boolean
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = createContext<AppContextType | null>(null)

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [showExtraFilters, setShowExtraFilters] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (showExtraFilters && window.innerWidth < 640) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'unset'
    }
  }, [showExtraFilters])

  useEffect(() => {
    window.innerWidth >= 640 && setShowExtraFilters(true)
  }, [])

  useEffect(() => {
    if (!isDark) {
      document.body.style.backgroundColor = 'var(--lightBackground)'
    } else {
      document.body.style.backgroundColor = 'var(--mainBackground)'
    }
  }, [isDark])

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        showExtraFilters,
        setShowExtraFilters,
        isDark,
        setIsDark,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
