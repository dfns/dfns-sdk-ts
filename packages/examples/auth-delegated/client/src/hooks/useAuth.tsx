import React, { createContext, ReactNode, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../api'

export interface AuthContextType {
  loading: boolean
  user?: string
  error?: any
  login: (username: string, password: string) => void
  logout: () => void
  register: (username: string, password: string) => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<string | undefined>(undefined)
  const [error, setError] = useState<any>()
  const navigate = useNavigate()

  const login = (username: string, password: string) => {
    setLoading(true)

    api
      .login(username, password)
      .then(({ username }) => {
        setUser(username)
        navigate('/')
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  const register = (username: string, password: string) => {
    setLoading(true)

    api
      .register(username, password)
      .then(({ username }) => {
        navigate('/login', { state: { username } })
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  const logout = () => {
    setUser(undefined)
  }

  return (
    <AuthContext.Provider value={{ loading, user, error, login, logout, register }}>{children}</AuthContext.Provider>
  )
}

export default function useAuth(): AuthContextType {
  return useContext(AuthContext)
}
