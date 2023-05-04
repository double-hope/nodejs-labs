import { createContext } from 'react';

type AuthContextType = { auth: boolean, setAuth: (auth: boolean) => void };

export const AuthContext = createContext<AuthContextType>({ auth: !!sessionStorage.getItem('accessToken'), setAuth: (auth: boolean) => {} });