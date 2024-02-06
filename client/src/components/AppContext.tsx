import { createContext } from 'react';
import type { Auth, User } from '../utilities';

export type AppContextValues = {
  user: User | undefined;
  setUser: (user: User | undefined) => void; // Now accepts a User object or undefined
  token: string | undefined;
  handleSignIn: (auth: Auth) => void;
  handleSignOut: () => void;
};

export const AppContext = createContext<AppContextValues>({
  user: undefined,
  token: undefined,
  setUser: () => {},
  handleSignIn: () => {},
  handleSignOut: () => {},
});

export const UserProvider = AppContext.Provider;
