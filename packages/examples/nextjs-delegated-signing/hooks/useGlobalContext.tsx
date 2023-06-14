'use client'

import { DFNS_END_USER_TOKEN_COOKIE } from '@/common/constants'
import React, { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'

const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift()
}

const deleteCookie = (name: string) => {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

export interface AppContext {
  dfnsEndUserAuthToken?: string
  resetDfnsEndUser: () => void
}

const AppContext = createContext<AppContext>({} as AppContext)

export const AppContextProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
  const [dfnsEndUserAuthToken, setDfnsEndUserAuthToken] = useState<string | undefined>()

  const refreshStateFromCookies = useCallback(() => {
    const token = getCookie(DFNS_END_USER_TOKEN_COOKIE)
    setDfnsEndUserAuthToken(token)
  }, [])

  const resetDfnsEndUser = useCallback(() => {
    deleteCookie(DFNS_END_USER_TOKEN_COOKIE)
  }, [])

  // refresh end user state from cookies in regular intervals
  useEffect(() => {
    const intervalId = setInterval(refreshStateFromCookies, 1000)
    return () => clearInterval(intervalId)
  }, [refreshStateFromCookies])

  return <AppContext.Provider value={{ dfnsEndUserAuthToken, resetDfnsEndUser }}>{children}</AppContext.Provider>
}

export default function useAppContext(): AppContext {
  return useContext(AppContext)
}
