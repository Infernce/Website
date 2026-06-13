import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <BrowserRouter>
        <App/>
        <p>SAMPLE TEXT</p>
      </BrowserRouter>
    </div>
  </StrictMode>
)
