import React from 'react'
import { Link, useLocation, useRoutes } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { user, logout } = useAuth()
  const { pathname } = useLocation()
  const pageTitle = capitalizeFirstLetter(pathname.replace(/^\//, '')) || 'Home'

  return (
    <div className="p-10">
      <div className="flex items-center justify-between">
        <h1 className="m-0">{pageTitle}</h1>

        <div className="flex items-center justify-between gap-4">
          <Link to="/">Home</Link>
          <a onClick={logout} className="cursor-pointer">
            Logout
          </a>
        </div>
      </div>

      {user && <span className="italic">Logged-in as {user}</span>}

      {!user && (
        <span className="italic">
          You're not logged in, you need to <a href="/login">Log in</a>
        </span>
      )}

      <div className="pb-10" />

      {children}
    </div>
  )
}

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
