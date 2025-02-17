import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react'
import { Provider } from "@/components/ui/provider"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element = {<h1>My Main</h1>} />)
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)
