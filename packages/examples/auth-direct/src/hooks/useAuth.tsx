import { DfnsError } from '@dfns/sdk/dfnsError'
import jwt_decode from 'jwt-decode'
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { authApi } from '../api'

export interface AuthContextType {
  loading: boolean
  user?: string
  error?: DfnsError
  login: (username: string, orgId: string) => void
  logout: () => void
  register: (username: string, orgId: string, registrationCode: string) => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const extractUser = (accessToken: string): string => {
  const decoded: Record<string, string> = jwt_decode(accessToken)
  return decoded['https://custom/username']
}

export const AuthProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<string | undefined>(undefined)
  const [error, setError] = useState<DfnsError | undefined>()
  const [init, setInit] = useState<boolean>(true)
  const navigate = useNavigate()

  useEffect(() => {
    const authToken = localStorage.getItem('DFNS_AUTH_TOKEN')
    if (authToken) {
      setUser(extractUser(authToken))
    }
    setInit(false)
  }, [])

  const login = (username: string, orgId: string) => {
    setLoading(true)

    authApi()
      .login({
        username,
        orgId,
      })
      .then(({ token }) => {
        localStorage.setItem('DFNS_AUTH_TOKEN', token)
        setUser(extractUser(token))
        navigate('/')
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  const logout = () => {
    setUser(undefined)
    localStorage.removeItem('DFNS_AUTH_TOKEN')
  }

  const register = (username: string, orgId: string, registrationCode: string) => {
    setLoading(true)

    authApi()
      .register({ username, orgId, registrationCode })
      .then(() => {
        navigate('/')
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  return (
    <AuthContext.Provider value={{ loading, user, error, login, logout, register }}>
      {!init && children}
    </AuthContext.Provider>
  )
}

export default function useAuth(): AuthContextType {
  return useContext(AuthContext)
}
