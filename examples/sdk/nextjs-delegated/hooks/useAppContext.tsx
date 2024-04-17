'use client'

import React, { ReactNode, createContext, useContext, useState } from 'react'

export interface AppContextType {
  authToken: string | undefined
  setAuthToken: (token: string | undefined) => void
}

const AppContext = createContext<AppContextType>({} as AppContextType)

export const AppContextProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
  const [authToken, setAuthToken] = useState<string | undefined>(undefined)

  return <AppContext.Provider value={{ authToken, setAuthToken }}>{children}</AppContext.Provider>
}

export function useAppContext(): AppContextType {
  return useContext(AppContext)
}
