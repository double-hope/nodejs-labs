import { createContext } from 'react';

type User = {
    name: string;
    email: string;
    accessToken: string;
    roles: [];
  };
  
type AuthContextValue = {
    user: User | null;
    setAuth: React.Dispatch<React.SetStateAction<{
        user: User | null;
    }>>;
};

const AuthContext = createContext<AuthContextValue>({
    user: null,
    setAuth: () => {},
});

export { AuthContext };