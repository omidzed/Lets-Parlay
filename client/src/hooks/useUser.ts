import { AppContextValues, AppContext } from '../Context/AppContext';
import { useContext } from 'react';

export const useUser = (): AppContextValues => {
  const userContext = useContext(AppContext);
  if (!userContext) {
    throw new Error(
      'useUser must only be used inside the UserProvider tree.'
    );
  } else return userContext;
};
