import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Self-hosted fonts: bundled with the site, so no visitor data goes to a
// third-party font service. Manrope carries the headings, Inter the body.
import '@fontsource-variable/manrope'
import '@fontsource-variable/inter'

import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
