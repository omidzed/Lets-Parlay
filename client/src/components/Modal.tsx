import { GrFormClose } from 'react-icons/gr';
import { useModal } from './useModal';
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
    <div className="absolute text-black">
      <div
        onClick={closeModal}
        className="fixed top-0 w-full h-full bg-black/75 z-50 cursor-pointer"></div>
      <div
        className="fixed z-50 min-h-max min-w-max text-base rounded-lg pb-8 bg-white
       rounded-t-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between bg-blue-800 rounded-t-lg py-2 px-4 border-blue-700-2">
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
