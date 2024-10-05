import { createContext, useState, ReactNode } from 'react';

export type ModalContextValues = {
  isModalOpen: boolean;
  modalContent: JSX.Element | null;
  openModal: (content: JSX.Element, header: string) => void;
  closeModal: () => void;
  header: string;
};

const initialContextValue: ModalContextValues = {
  isModalOpen: false,
  modalContent: null,
  openModal: () => {},
  closeModal: () => {},
  header: '',
};

export const ModalContext =
  createContext<ModalContextValues>(initialContextValue);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);
  const [header, setHeader] = useState<string>('');

  const openModal = (content: JSX.Element, header: string) => {
    setModalContent(content);
    setHeader(header);
    setModalOpen(true);
  };

  const closeModal = () => {
    localStorage.getItem('token');
    setModalOpen(false);
    setModalContent(null);
    setHeader('');
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, modalContent, openModal, closeModal, header }}>
      {children}
    </ModalContext.Provider>
  );
};
