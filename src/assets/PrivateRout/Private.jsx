import { PropsWithChildren, useContext } from 'react';
import AuthProvider from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthProvider)
    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }
    if (user) {
        return children
    }
    return <Navigate to='/'></Navigate>;
}
export default Private