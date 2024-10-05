import { useContext } from 'react';
import {
  type ModalContextValues,
  ModalContext,
} from '../Providers/ModalProvider';

export const useModal = (): ModalContextValues => {
  if (!ModalContext) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return useContext(ModalContext);
};
