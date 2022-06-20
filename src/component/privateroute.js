import React from 'react';
import useLocalState  from '../context/authcontext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const [user, setUser] = useLocalState('');
    return user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
