import { Route, Routes, Navigate, Outlet } from 'react-router-dom'

import useAuth from '../hooks/useAuth'
import Login from '../pages/login'
import Credential from '../pages/credential'
import ImportWallet from '../pages/import'
import ExportWallet from '../pages/export'
import Home from '../pages/home'

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
      <Route path="/login" element={<Login />} />

      <Route path="/credential" element={<Credential />} />

      <Route path="/" element={<AuthenticatedRoute />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/import" element={<AuthenticatedRoute />}>
        <Route path="/import" element={<ImportWallet />} />
      </Route>

      <Route path="/export" element={<AuthenticatedRoute />}>
        <Route path="/export" element={<ExportWallet />} />
      </Route>
    </Routes>
  )
}
