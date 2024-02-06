import { createContext, useContext, useState, ReactNode } from 'react';

type ModalContextType = {
  isModalOpen: boolean;
  modalContent: JSX.Element | null;
  openModal: (content: JSX.Element, header: string) => void;
  closeModal: () => void;
  header: string;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);
  const [header, setHeader] = useState<string>('');

  const openModal = (content: JSX.Element, header: string) => {
    setModalContent(content);
    setHeader(header);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
