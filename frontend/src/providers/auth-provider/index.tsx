import { AuthContext } from '@/context/auth';
import React, { ReactNode, useState } from 'react';

type ProviderProps = {
    children: ReactNode;
}

type User = {
    name: string;
    email: string;
    accessToken: string;
};

const AuthProvider = ({ children }: ProviderProps) => {

    const [auth, setAuth] = useState<{ user: User | null, accessToken: string }>({
        user: null,
        accessToken: '',
    });

    return (
        <AuthContext.Provider value={{ user: auth.user, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider };