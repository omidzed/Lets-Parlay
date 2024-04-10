import { GrFormClose } from 'react-icons/gr';
import { useModal } from '../hooks/useModal';
import { useEffect } from 'react';

export const Modal = () => {
  const { isModalOpen, modalContent, closeModal, header } = useModal();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) return null;

  return (
    <div className="absolute left-1/2 top-1/2 flex justify-center items-center text-black">
      <div
        onClick={closeModal}
        className="fixed w-full h-full bg-black/75 z-50 cursor-pointer"></div>
      <div className="fixed z-50 min-h-max min-w-max text-base rounded-t-2xl rounded-b-xl pb-2  bg-white">
        <div className="flex justify-between bg-blue-800 rounded-t-xl py-2 p-4 border-blue-700-2">
          <p className="text-white md:text-lg ml-4 mr-2 md:ml-8 text-center">
            {header}
          </p>

          <button onClick={closeModal} aria-label="Close modal">
            <GrFormClose color="white" size={24} />
          </button>
        </div>
        <div className="flex justify-center items-center">{modalContent}</div>
      </div>
    </div>
  );
};
