import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authcontext";

export function PrivateRoute ({ children }) {
    const { user } = useContext(AuthContext);
    
    if (!user) {
        return <Navigate to='/login'/>;
    } else {
    return children
    }
    
}
       

