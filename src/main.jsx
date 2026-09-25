import React from 'react'
import { createRoot } from 'react-dom/client'

// Self-hosted fonts: bundled with the site, so no visitor data goes to a
// third-party font service. `full` carries every Fraunces axis the design
// uses (opsz, wght, SOFT, WONK); `opsz` carries Newsreader's opsz + wght.
// Newsreader italic is deliberately not included — nothing on the page
// sets body text in italic, so it would be dead weight.
import '@fontsource-variable/fraunces/full.css'
import '@fontsource-variable/fraunces/full-italic.css'
import '@fontsource-variable/newsreader/opsz.css'

import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
