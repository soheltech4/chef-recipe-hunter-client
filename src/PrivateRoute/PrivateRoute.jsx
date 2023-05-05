import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router'
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()   
    if(loading) {
        return <div className='d-flex justify-content-center container mx-auto mt-5'><Spinner animation="border" variant="warning" /></div>
    }
    
    if (user) {
        return children;
    }
    return (<Navigate to='/login' state={{from : location}} replace></Navigate>);
};

export default PrivateRoute;