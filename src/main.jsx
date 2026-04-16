import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './router/Routes'
import CallFriendsProvider from './components/context/CallFriendsContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CallFriendsProvider>
      <RouterProvider router={router} />
    </CallFriendsProvider>
    
  </StrictMode>,
)
