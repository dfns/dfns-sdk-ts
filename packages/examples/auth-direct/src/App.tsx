import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './globals.css'
import Router from './components/router'
import { AuthProvider } from './hooks/useAuth'

function App() {
  return (
    <div className="prose mx-auto">
      <BrowserRouter>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
