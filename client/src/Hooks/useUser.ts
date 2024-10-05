import { useContext } from 'react';
import { UserContextValues, UserContext } from '../Providers/UserProvider';

export const useUser = (): UserContextValues => {
  if (!UserContext) {
    throw new Error('useUser must be used within a UserProvider');
  }
return useContext(UserContext);
};
