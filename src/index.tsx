import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/base/reset.scss'
import './index.scss'
import Homepage from './routes/Homepage/Homepage'
import Games from './routes/Games/Games'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/games',
    element: <Games />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
