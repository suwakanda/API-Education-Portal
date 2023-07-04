import React from 'react';
import { Navigate } from 'react-router';
import { getToken } from './Common';

function PublicRoute({children}){
    const auth = getToken()
    return(
    !auth ? children :<Navigate to ="/Dashboard"></Navigate>
    )
}
export default PublicRoute;