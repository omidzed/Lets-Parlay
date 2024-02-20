import { createContext, useState, useEffect, ReactNode } from 'react';
import type { Auth, User } from '../utilities';
import { getToken, storeToken } from '../utilities/token-storage';

export type AppContextValues = {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
  token: string | undefined;
  setToken: (token: string) => void;
  funds: number | undefined;
  setFunds: (funds: number) => void;
  handleSignIn: (auth: Auth) => void;
  handleSignOut: () => void;
  userFunds: (newFunds) => void;
};

export const AppContext = createContext<AppContextValues>({
  user: undefined,
  setUser: () => {},
  token: undefined,
  setToken: () => {},
  funds: undefined,
  setFunds: () => {},
  handleSignIn: () => {},
  handleSignOut: () => {},
  userFunds: () => {},
});

type UserProviderProps = {
  children: ReactNode;
};

const tokenKey = 'react-context-jwt';

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [token, setToken] = useState<string | undefined>(undefined);
  const [funds, setFunds] = useState<number | undefined>(undefined);

  const handleSignIn = (auth: Auth) => {
    localStorage.setItem(tokenKey, JSON.stringify(auth));
    setUser(auth.user);
    setToken(auth.token);
  };

  const handleSignOut = () => {
    localStorage.removeItem(tokenKey);
    setUser(undefined);
    setToken(undefined);
  };

  useEffect(() => {
    const auth = localStorage.getItem(tokenKey);
    if (auth) {
      const a = JSON.parse(auth);
      setUser(a.user);
      setToken(a.token);
    }
  }, [setToken]);

  useEffect(() => {
    const tokenData = getToken();
    if (tokenData) {
      setUser(tokenData.user);
      setToken(tokenData.token);
      setFunds(tokenData.user.funds);
    }
  }, [setToken]);

  const userFunds = (newFunds: number) => {
    setFunds(newFunds);

    const tokenData = getToken();
    if (tokenData) {
      const updatedToken = {
        ...tokenData,
        user: {
          ...tokenData.user,
          funds: newFunds,
        },
      };
      storeToken(updatedToken);
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        funds,
        setFunds,
        handleSignIn,
        handleSignOut,
        userFunds,
      }}>
      {children}
    </AppContext.Provider>
  );
};
