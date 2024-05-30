import React from 'react'
import { Route, Routes, Navigate, Outlet } from 'react-router-dom'

import useAuth from '../hooks/useAuth'
import Login from '../pages/login'
import Credential from '../pages/credential'
import Home from '../pages/home'
import WalletNew from '../pages/wallet'

function AuthenticatedRoute() {
  const { user } = useAuth()
  if (!user) {
    return <Navigate to="/login" replace={true} />
  }
  return <Outlet />
}

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<AuthenticatedRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/wallets/new" element={<AuthenticatedRoute />}>
        <Route path="/wallets/new" element={<WalletNew />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/credential" element={<Credential />} />
    </Routes>
  )
}
