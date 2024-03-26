import React, { ReactNode, createContext, useContext, useState } from 'react'

export interface AppContextType {
  authToken: string | undefined
  setAuthToken: (token: string | undefined) => void
  keyPair: CryptoKeyPair | undefined
  setKeyPair: (key: CryptoKeyPair | undefined) => void
}

const AppContext = createContext<AppContextType>({} as AppContextType)

export const AppContextProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
  const [authToken, setAuthToken] = useState<string | undefined>(undefined)
  const [keyPair, setKeyPair] = useState<CryptoKeyPair | undefined>(undefined)

  return <AppContext.Provider value={{ authToken, setAuthToken, keyPair, setKeyPair }}>{children}</AppContext.Provider>
}

export function useAppContext(): AppContextType {
  return useContext(AppContext)
}
