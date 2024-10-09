import { GrFormClose } from 'react-icons/gr';
import { useModal } from '../Hooks/useModal';
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
    <div className="fixed inset-0 z-50 flex justify-center items-center text-black">
      <div
        onClick={closeModal}
        className="absolute inset-0 w-full h-full bg-black/75 z-60 cursor-pointer"></div>
      <div className="relative z-50 w-[90%] max-w-md md:min-w-max text-base rounded-t-2xl rounded-b-xl pb-2  bg-white">
        <div className="flex justify-between bg-blue-700 rounded-t-xl py-2 p-4 border-blue-700-2">
          <p className="text-white md:text-md ml-4 mr-2 md:ml-14 text-center">
            {header}
          </p>

          <button
            className=" border border-transparent hover:bg-blue-500 hover:border-blue-500 rounded-full"
            onClick={closeModal}
            aria-label="Close modal">
            <GrFormClose color="white" size={24} />
          </button>
        </div>
        <div className="flex justify-center items-center">{modalContent}</div>
      </div>
    </div>
  );
};
