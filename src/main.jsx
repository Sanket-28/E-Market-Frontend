import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BuyerProvider } from './context/buyer/BuyerContext.jsx'
import AlertState from './context/alert/AlertState'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AlertState>
      <BuyerProvider>
        <App />
      </BuyerProvider>
    </AlertState>
  </StrictMode>
)
