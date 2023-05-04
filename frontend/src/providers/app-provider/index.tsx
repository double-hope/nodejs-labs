import { combineComponents } from '@/utils/combineComponents';
import { AuthProvider, UserProvider } from '..';

const providers = [
    AuthProvider,
    UserProvider,
]

export const AppContextProvider = combineComponents(providers);