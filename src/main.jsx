import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataProvider } from './Components/Context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
    <DataProvider>
    <App />
    </DataProvider>
)
