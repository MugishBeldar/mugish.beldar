import './index.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/theme';

createRoot(document.getElementById('root')).render(
  <ThemeProvider value={'light'}>
    <App />
  </ThemeProvider>

)
