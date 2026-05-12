<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{ BrowserRouter} from 'react-router'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <App />
</BrowserRouter>
  
=======

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
>>>>>>> 19b6e89d972e27111eff49164a5644309456b183
)
