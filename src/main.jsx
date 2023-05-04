import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './Routes/Routes';
import AuthProvider from './Providers/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
