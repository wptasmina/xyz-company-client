// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'

// import { router } from './routes/router';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import AuthProvider from './AuthProvider/AuthProvider';
// import { RouterProvider } from 'react-router-dom';
// import { HelmetProvider } from 'react-helmet-async';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider>
//     <HelmetProvider>
//       <RouterProvider router={router} />
//       </HelmetProvider>
//     </AuthProvider>
//     <ToastContainer
// position="top-right"
// autoClose={5000}
// hideProgressBar={false}
// newestOnTop={false}
// closeOnClick={false}
// rtl={false}
// pauseOnFocusLoss
// draggable
// pauseOnHover
// theme="colored"
// />
//   </StrictMode>,
// )

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { router } from "./routes/router.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
          <ToastContainer position="top-center" />
        </HelmetProvider>
      </QueryClientProvider>
      </AuthProvider>
  </StrictMode>
);