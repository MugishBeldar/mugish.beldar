import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/theme';

createRoot(document.getElementById('root')).render(
  <ThemeProvider value={'light'}>
    <App />
  </ThemeProvider>

)
