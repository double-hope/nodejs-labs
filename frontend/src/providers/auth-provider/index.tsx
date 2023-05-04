import { AuthContext } from '@/context/auth';
import React, { ReactNode, useState } from 'react';

type ProviderProps = {
    children: ReactNode;
}

type User = {
    name: string;
    email: string;
    accessToken: string;
    roles: [];
};

const AuthProvider = ({ children }: ProviderProps) => {

    const [auth, setAuth] = useState<{ user: User | null }>({
        user: null,
    });

    return (
        <AuthContext.Provider value={{ user: auth.user, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider };