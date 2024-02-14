import { useContext } from 'react';
import { type ModalContextValues, ModalContext } from './ModalContext';

export const useModal = (): ModalContextValues => {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error('useModal must be used within a ModalProvider');
  } else return modalContext;
};
