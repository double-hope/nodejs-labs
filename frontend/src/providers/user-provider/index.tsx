import { UserContext } from '@/context/user';
import React, { useState, ReactNode } from 'react';

type ProviderProps = {
    children: ReactNode;
}

const UserProvider = ({ children }: ProviderProps) => {
    const [user, setUser] = useState({name: '', email: ''});
    const userProvidedValue = { user, setUser };

    return (
        <UserContext.Provider value={userProvidedValue}>{children}</UserContext.Provider>
    )
}

export { UserProvider };