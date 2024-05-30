import { DfnsError } from '@dfns/sdk/dfnsError'
import jwt_decode from 'jwt-decode'
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { authApi, dfnsApi } from '../api'
import { WebAuthnSigner } from '@dfns/sdk-browser'
import { CreateCredentialWithCodeResponse } from '@dfns/sdk/generated/auth'

export interface AuthContextType {
  loading: boolean
  user?: string
  error?: DfnsError
  login: (username: string, orgId: string) => void
  logout: () => void
  register: (username: string, orgId: string, registrationCode: string) => void
  createCred: (code: string) => Promise<CreateCredentialWithCodeResponse | undefined>
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const extractUser = (accessToken: string): string => {
  const decoded: Record<string, string> = jwt_decode(accessToken)
  return decoded['https://custom/username']
}

export const AuthProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<string | undefined>()
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
    setError(undefined)

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
    setError(undefined)

    authApi()
      .register({ username, orgId, registrationCode })
      .then(() => {
        navigate('/')
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  const createCred = async (code: string): Promise<CreateCredentialWithCodeResponse | undefined> => {
    setLoading(true)
    setError(undefined)

    try {
      const challenge = await dfnsApi().auth.createCredentialChallengeWithCode({
        body: { code, credentialKind: 'Fido2' },
      })

      if (challenge.kind !== 'Fido2') {
        throw Error('Not a Fido2 challenge') // this check is meant for proper typescript type inferrence
      }

      const attestation = await new WebAuthnSigner().create(challenge)

      const credential = await dfnsApi().auth.createCredentialWithCode({
        body: {
          credentialName: 'My new demo Cred - ' + new Date().toISOString(),
          challengeIdentifier: challenge.challengeIdentifier,
          credentialKind: attestation.credentialKind,
          credentialInfo: attestation.credentialInfo,
        },
      })

      return credential
    } catch (err) {
      setError(err as any)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ loading, user, error, login, logout, register, createCred }}>
      {!init && children}
    </AuthContext.Provider>
  )
}

export default function useAuth(): AuthContextType {
  return useContext(AuthContext)
}
