import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import Router from './components/router'
import { AuthProvider } from './hooks/useAuth'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
