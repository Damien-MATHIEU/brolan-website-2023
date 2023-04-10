import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/base/reset.scss'
import './index.scss'
import Homepage from './routes/Homepage/Homepage'
import Games from './routes/Games/Games'
import Game from './routes/Game/Game'
import Error404 from './routes/Error404/Error404'
import LegalNotice from './routes/LegalNotice/LegalNotice'
import Contact from './routes/Contact/Contact'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <Error404 />
  },
  {
    path: '/games',
    element: <Games />
  },
  {
    path: '/game/:gameName',
    element: <Game />
  },
  {
    path: '/mentions-legales',
    element: <LegalNotice />
  },
  {
    path: '/contact',
    element: <Contact />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
