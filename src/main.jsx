import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './AuthProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
// import {
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
