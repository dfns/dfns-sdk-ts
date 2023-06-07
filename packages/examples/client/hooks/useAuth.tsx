'use client'

import { authApi } from '@/api'
import { DfnsError } from '@dfns/sdk/dfnsError'
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

export interface AuthContextType {
  loading: boolean
  accessToken?: string
  error?: DfnsError
  login: (username: string, orgId: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined)
  const [error, setError] = useState<DfnsError | undefined>()
  const [init, setInit] = useState<boolean>(true)

  useEffect(() => {
    const accessToken = localStorage.getItem('DFNS_ACCESS_TOKEN')
    if (accessToken) {
      setAccessToken(accessToken)
    }
    setInit(false)
  })

  const login = (username: string, orgId: string) => {
    setLoading(true)

    authApi()
      .login({
        username,
        orgId,
      })
      .then(({ token }) => {
        setAccessToken(token)
        localStorage.setItem('DFNS_ACCESS_TOKEN', token)
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  const logout = () => {
    setAccessToken(undefined)
    localStorage.removeItem('DFNS_ACCESS_TOKEN')
  }

  return <AuthContext.Provider value={{ loading, accessToken, error, login, logout }}>{!init && children}</AuthContext.Provider>
}

export default function useAuth(): AuthContextType {
  return useContext(AuthContext)
}
