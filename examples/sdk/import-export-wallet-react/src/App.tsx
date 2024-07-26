import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './hooks/useAuth'
import Router from './components/router'

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
