import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ThemProvider} from './components/ThemProvider.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemProvider>
    <App />
    </ThemProvider>
  </StrictMode>,
)
