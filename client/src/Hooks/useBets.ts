import { useContext } from 'react';
import { BetsContext, BetsContextValues } from '../Providers/BetsProvider';

export const useBets = (): BetsContextValues => {
  if (!BetsContext) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return useContext(BetsContext);
};
