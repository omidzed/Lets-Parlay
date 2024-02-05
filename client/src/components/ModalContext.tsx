// import { createContext, useContext, useState, ReactNode } from 'react';

// // Define the context shape
// interface ModalContextType {
//   modalType: string;
//   openModal: (type: string) => void;
//   closeModal: () => void;
// }

// // Create the context with an empty initial value
// const ModalContext = createContext<ModalContextType | undefined>(undefined);

// // Define the provider component
// export const ModalProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [modalType, setModalType] = useState<string>('closed');

//   const openModal = (type: string) => setModalType(type);
//   const closeModal = () => setModalType('closed');

//   return (
//     <ModalContext.Provider value={{ modalType, openModal, closeModal }}>
//       {children}
//     </ModalContext.Provider>
//   );
// };

// // Custom hook to use the modal context
// export const useModal = (): ModalContextType => {
//   const context = useContext(ModalContext);
//   if (context === undefined) {
//     throw new Error('useModal must be used within a ModalProvider');
//   }
//   return context;
// };
