import { createContext } from 'react';

type UserContextType = { user: {name: string, email: string}, setUser: (user: {name: string, email: string}) => void };

export const UserContext = createContext<UserContextType>( {user: {name: '', email: ''}, setUser: (user: {name: string, email: string}) => {}});