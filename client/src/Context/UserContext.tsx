import { createContext, useState, useEffect, ReactNode } from 'react';
import type { Auth, User } from '../utils';
import { getToken, storeToken } from '../utils/token-storage';

export type UserContextValues = {
  user: User | undefined;
  token: string | undefined;
  funds: number | undefined;
  handleSignIn: (auth: Auth) => void;
  handleSignOut: () => void;
  updateFunds: (newFunds: number) => void;
};

const initialContextValue: UserContextValues = {
  user: undefined,
  token: undefined,
  funds: undefined,
  handleSignIn: () => {},
  handleSignOut: () => {},
  updateFunds: () => {},
};

export const UserContext =
  createContext<UserContextValues>(initialContextValue);

type UserProviderProps = {
  children: ReactNode;
};

const tokenKey = 'token';
const tokenData = getToken();

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [token, setToken] = useState<string | undefined>(undefined);
  const [funds, setFunds] = useState<number | undefined>(() => {
    if (
      tokenData &&
      tokenData.user &&
      typeof tokenData.user.funds === 'number'
    ) {
      return parseFloat(tokenData.user.funds.toString());
    }
    return undefined;
  });

  const handleSignIn = (auth: Auth) => {
    localStorage.setItem(tokenKey, JSON.stringify(auth));
    setUser(auth.user);
    setToken(auth.token);
    setFunds(auth.user.funds);
  };

  const handleSignOut = () => {
    localStorage.removeItem(tokenKey);
    setUser(undefined);
    setToken(undefined);
    setFunds(undefined);
  };

  const updateFunds = (newFunds: number) => {
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

  useEffect(() => {
    const auth = localStorage.getItem(tokenKey);
    if (auth) {
      const parsedAuth = JSON.parse(auth);
      setUser(parsedAuth.user);
      setToken(parsedAuth.token);
      setFunds(parsedAuth.user.funds);
    }
  }, []);

  const contextValue: UserContextValues = {
    user,
    token,
    funds,
    handleSignIn,
    handleSignOut,
    updateFunds,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
