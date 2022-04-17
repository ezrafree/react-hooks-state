import { createContext, FunctionComponent, ReactNode, useReducer } from 'react'

import { reducer, initialState } from './Reducer'
import { AppContext } from './Types'

export const Context = createContext<AppContext>({
  state: initialState,
  dispatch: () => null,
})

type ProviderProps = {
  children: ReactNode
}

export const Provider: FunctionComponent<ProviderProps> = ({
  children,
}: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}
