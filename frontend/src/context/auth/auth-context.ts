import { createContext } from 'react';

type User = {
    name: string;
    email: string;
    accessToken: string;
  };
  
type AuthContextValue = {
    user: User | null;
    setAuth: React.Dispatch<React.SetStateAction<{
        user: User | null;
        accessToken: string;
    }>>;
};

const AuthContext = createContext<AuthContextValue>({
    user: null,
    setAuth: () => {},
});

export { AuthContext };