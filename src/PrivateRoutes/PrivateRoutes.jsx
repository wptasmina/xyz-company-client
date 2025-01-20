import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


export default function PrivatRoutes({children}) {
  const { user } = useContext(AuthContext);
//  const navigate = 

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>

  
}