import { AuthContext } from '@/context/auth';
import React, { ReactNode, useState } from 'react';

type ProviderProps = {
    children: ReactNode;
}

const AuthProvider = ({ children }: ProviderProps) => {
    const [auth, setAuth] = useState<boolean>(!!sessionStorage.getItem('accessToken'));
    const authProvidedValue = { auth, setAuth };

    return (
        <AuthContext.Provider value={authProvidedValue}>{children}</AuthContext.Provider>
    )
}

export { AuthProvider };