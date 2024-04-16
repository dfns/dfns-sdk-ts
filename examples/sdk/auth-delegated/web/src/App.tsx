import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './globals.css'
import { AppContextProvider } from './hooks/useAppContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Wallets from './pages/Wallets'
import Recover from './pages/Recover'

function App() {
  return (
    <div className="prose mx-auto">
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/wallets" element={<Wallets />} />
            <Route path="/recover" element={<Recover />} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </div>
  )
}

export default App
