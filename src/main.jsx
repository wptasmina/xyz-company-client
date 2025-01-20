import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { router } from './routes/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthProvider from './AuthProvider/AuthProvider';
import { RouterProvider } from 'react-router-dom';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
  </StrictMode>,
)
