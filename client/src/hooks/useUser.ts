import { UserContextValues, UserContext } from '../Context/UserContext';
import { useContext } from 'react';

export const useUser = (): UserContextValues => {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error('useUser must only be used inside the UserProvider tree.');
  } else return userContext;
};
