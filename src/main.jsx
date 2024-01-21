import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TotalCostContextProvider } from './TotalCostContext/TotalCostContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TotalCostContextProvider>
      <App />
    </TotalCostContextProvider>
  </React.StrictMode>,
)
