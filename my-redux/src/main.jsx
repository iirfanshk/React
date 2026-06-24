import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Store'   // ← ADD THIS

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>   {/* ← capital P */}
      <App />
    </Provider>
  </StrictMode>,
)