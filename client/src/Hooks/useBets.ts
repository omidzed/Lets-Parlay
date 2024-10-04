import { useContext } from 'react';
import { BetsContext, BetsContextValues } from '../Providers/BetsProvider';

export const useBets = (): BetsContextValues => {
  // Directly return the context as it's guaranteed to be defined
  return useContext(BetsContext);
};
