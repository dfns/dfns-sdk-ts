'use client'

import useAuth from '@/hooks/useAuth'
import Data from './data'
import Login from './login'

export default function Main() {
  const { accessToken } = useAuth()

  return (
    <div>{accessToken ? <Data /> : <Login />}</div>
  )
}
