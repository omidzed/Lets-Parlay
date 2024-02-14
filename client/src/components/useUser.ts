import { AppContextValues, AppContext } from './AppContext';
import { useContext } from 'react';

export function useUser(): AppContextValues {
  const userContext = useContext(AppContext);
  if (!userContext) {
    throw new Error(
      'useUser must only be used in a component that is inside the UserProvider tree.'
    );
  } else return userContext;
}
