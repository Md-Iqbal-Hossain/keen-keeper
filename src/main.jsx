import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import Friends from './pages/friends/Friends'
import Timeline from './pages/timeline/Timeline'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Homepage from './pages/homepage/Homepage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: () => fetch('/friends.json')
      },
      {
        path: '/friends',
        element: <Friends />
      },
      {
        path: '/timeline',
        element: <Timeline />
      }
    ],
    errorElement: <NotFoundPage />
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
