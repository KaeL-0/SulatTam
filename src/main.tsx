import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {HashRouter } from 'react-router-dom'
import { UserInfoProvider } from './context/UserInfoContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <UserInfoProvider>
        <App />
      </UserInfoProvider>
    </HashRouter>
  </StrictMode>,
)
