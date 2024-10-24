import React, { ReactNode, createContext, useContext, useState } from 'react'

export interface AppContextType {
  authToken: string | undefined
  setAuthToken: (token: string | undefined) => void
  keyPair: CryptoKeyPair | undefined
  setKeyPair: (key: CryptoKeyPair | undefined) => void
  orgId: string | undefined
  setOrgId: (orgId: string | undefined) => void
}

const AppContext = createContext<AppContextType>({} as AppContextType)

export const AppContextProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
  const [authToken, setAuthToken] = useState<string | undefined>(undefined)
  const [keyPair, setKeyPair] = useState<CryptoKeyPair | undefined>(undefined)
  const [orgId, setOrgId] = useState<string | undefined>(undefined)

  return (
    <AppContext.Provider value={{ authToken, setAuthToken, keyPair, setKeyPair, orgId, setOrgId }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext(): AppContextType {
  return useContext(AppContext)
}
