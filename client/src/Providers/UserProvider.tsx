import { createContext, useState, useEffect, ReactNode } from 'react';
import type { Auth, User } from '../utils/data-types';
import { getToken, storeToken } from '../utils/token-storage';

export type UserContextValues = {
  user: User | undefined;
  token: string | undefined;
  funds: number | undefined;
  handleSignIn: (auth: Auth) => void;
  handleSignOut: () => void;
  updateFunds: (newFunds: number) => void;
  isAdmin: boolean;
};

const initialContextValue: UserContextValues = {
  user: undefined,
  token: undefined,
  funds: undefined,
  handleSignIn: () => {},
  handleSignOut: () => {},
  updateFunds: () => {},
  isAdmin: false,
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
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
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
    setIsAdmin(auth.user.isAdmin || false);
  };

  const handleSignOut = () => {
    localStorage.removeItem(tokenKey);
    setUser(undefined);
    setToken(undefined);
    setFunds(undefined);
    setIsAdmin(false);
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
      setIsAdmin(parsedAuth.user.isAdmin || false);
    }
  }, []);

  const contextValue: UserContextValues = {
    user,
    token,
    funds,
    handleSignIn,
    handleSignOut,
    updateFunds,
    isAdmin,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
