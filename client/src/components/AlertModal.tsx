import { useModal } from '../hooks/useModal';

type AlertModalProps = {
  message: string;
  onClose: () => void;
};

export const AlertModal = ({ message }: AlertModalProps) => {
  const { closeModal } = useModal();

  return (
    <div className=" flex flex-col gap-5  items-center justify-center md:py-10 py-6 px-4 ml-2 md:px-6">
      <p className="md:px-5 text-thead">{message}</p>
      <button
        className="bg-blue-700 py-2 w-1/3 rounded-md text-white"
        onClick={closeModal}>
        OK
      </button>
    </div>
  );
};
