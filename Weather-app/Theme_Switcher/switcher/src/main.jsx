import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { useContext } from 'react'
// import {ContextProvider} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <ContextProvider.provider> */}
    <App />
    {/* </ContextProvider.provider> */}
  </StrictMode>,
)
