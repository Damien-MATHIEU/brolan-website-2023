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
import ScrollToTop from './customHooks/ScrollToTOp/ScrollToTop'
import Shop from './routes/Shop/Shop'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <Homepage />
      </>
    ),
    errorElement: (
      <>
        <ScrollToTop />
        <Error404 />
      </>
    )
  },
  {
    path: '/games',
    element: (
      <>
        <ScrollToTop />
        <Games />
      </>
    )
  },
  // {
  //   path: '/game/:gameName',
  //   element: (
  //     <>
  //       <ScrollToTop />
  //       <Game />
  //     </>
  //   )
  // },
  {
    path: '/mentions-legales',
    element: (
      <>
        <ScrollToTop />
        <LegalNotice />
      </>
    )
  },
  {
    path: '/contact',
    element: (
      <>
        <ScrollToTop />
        <Contact />
      </>
    )
  },
  {
    path: '/shop',
    element: (
      <>
        <ScrollToTop />
        <Shop />
      </>
    )
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
