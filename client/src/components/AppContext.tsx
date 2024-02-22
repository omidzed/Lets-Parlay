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
  updateFunds: (newFunds) => void;
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
  updateFunds: () => {},
});

type UserProviderProps = {
  children: ReactNode;
};

const tokenKey = 'react-context-jwt';
// const [funds, setFunds] = useState<string>(() => {
//   const tokenData = getToken();
//   return tokenData ? (tokenData.user.funds / 100).toFixed(2) : '2000.00';
// });
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [token, setToken] = useState<string | undefined>(undefined);
  const [funds, setFunds] = useState<number>(); // Assuming default funds to be 0

  // Update the funds state and persist the new value to local storage
  const updateFunds = (newFunds: number) => {
    setFunds(newFunds);

    // Persist to localStorage
    const tokenData = getToken(); // Assuming getToken retrieves the token object from localStorage
    if (tokenData) {
      const updatedToken = {
        ...tokenData,
        user: {
          ...tokenData.user,
          funds: newFunds,
        },
      };
      console.log(updatedToken);
      storeToken(updatedToken); // Assuming storeToken updates the token in localStorage
    }
  };

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

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        setFunds,
        handleSignIn,
        handleSignOut,
        funds,
        updateFunds,
      }}>
      {children}
    </AppContext.Provider>
  );
};
