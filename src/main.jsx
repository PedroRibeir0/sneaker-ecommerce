import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Checkout from './pages/Checkout/Checkout.jsx'
import App from './App'

const router = createBrowserRouter([
  {
    element: <App/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path:'/checkout',
        element: <Checkout amount={2}/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
