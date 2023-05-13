import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Components/Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if(user) {
        return children
    }
    
    if (loading) {
        return <div>
            <div className="flex justify-center items-center my-48">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden">...</span>
                </div>
            </div>
        </div>
    }

    
    return (
        <div>
            <Navigate to='/login' state={{ from: location }} replace></Navigate>
        </div>
    )
}
export default PrivateRoute;