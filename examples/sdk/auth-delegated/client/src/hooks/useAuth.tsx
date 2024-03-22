import React, { createContext, ReactNode, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../api'

export interface AuthContextType {
  loading: boolean
  user?: string
  token?: string
  keyPair?: CryptoKeyPair
  error?: any
  login: (username: string, password: string) => void
  logout: () => void
  register: (username: string, password: string, isWebAuthn: boolean) => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<string | undefined>(undefined)
  const [token, setToken] = useState<string | undefined>(undefined)
  const [keyPair, setKeyPair] = useState<CryptoKeyPair | undefined>(undefined)
  const [error, setError] = useState<any>()
  const navigate = useNavigate()

  const login = (username: string, password: string) => {
    setLoading(true)

    api
      .login(username, password)
      .then(({ username, token }) => {
        setUser(username)
        setToken(token)
        navigate('/')
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  const register = (username: string, password: string, isWebAuthn: boolean) => {
    setLoading(true)

    if (!isWebAuthn) {
      // Key is generated randomly here
      // In a production environment they key should be protected 
      // and loaded securely in the browser
      crypto.subtle.generateKey(
        { name: 'ECDSA', namedCurve: 'P-256' },
        true,
        ['sign', 'verify']
      ).then((generatedKeyPair) => {
        // Here the private key is set as a session variable
        // key will not exists upon logout
        setKeyPair(generatedKeyPair)
        api
          .register(username, password, generatedKeyPair)
          .then(({ username }) => {
            navigate('/login', { state: { username } })
          })
          .catch((err) => setError(err))
          .finally(() => setLoading(false))
      })
    }
    else {
      api
        .register(username, password)
        .then(({ username }) => {
          navigate('/login', { state: { username } })
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false))
    }
  }

  const logout = () => {
    setUser(undefined)
    setToken(undefined)
    setKeyPair(undefined)
  }

  return (
    <AuthContext.Provider value={{ loading, user, token, keyPair, error, login, logout, register }}>{children}</AuthContext.Provider>
  )
}

export default function useAuth(): AuthContextType {
  return useContext(AuthContext)
}
