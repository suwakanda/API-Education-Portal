import React from 'react';
import { Navigate } from 'react-router';
import { getToken } from './Common'
const PrivateRoute = ({children}) => {
    const auth =  getToken()
    return ( 
    auth ? children : <Navigate to ="/login"></Navigate>
  )
}

export default PrivateRoute;