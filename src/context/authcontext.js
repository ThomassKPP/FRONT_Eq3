import { createContext, useProvideAuth } from 'react';

export const AuthContext = createContext();

    const AuthProvider = ({ children }) => {
        const auth = useProvideAuth();
        return (
            <AuthContext.Provider value={auth}>
                {children}
            </AuthContext.Provider>
        );
    }

    export default AuthProvider;