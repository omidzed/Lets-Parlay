import { useContext } from 'react';
import { UserContextValues, UserContext } from '../Context/UserContext';

export const useUser = (): UserContextValues => {
  // Directly return the context as it's guaranteed to be defined
  return useContext(UserContext);
};
