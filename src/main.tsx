import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GlobalStorage } from './Hooks/useContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalStorage>
  <React.StrictMode>
        <App />
  </React.StrictMode>
  </GlobalStorage>,
)
