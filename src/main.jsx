// Import React's StrictMode for highlighting potential problems in the app
import { StrictMode } from 'react'

// Import createRoot from React DOM to render the React app into the DOM
import { createRoot } from 'react-dom/client'

// Import global CSS styles
import './index.css'

// Import the main App component
import App from './App.jsx'

// Select the root DOM element and render the React app inside it
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap App in StrictMode to help identify potential issues */}
    <App />
  </StrictMode>,
)
