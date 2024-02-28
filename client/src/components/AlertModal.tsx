import { useModal } from './useModal';

type AlertModalProps = {
  message: string;
  onClose: () => void;
};

export const AlertModal = ({ message }: AlertModalProps) => {
  const { closeModal } = useModal();

  return (
    <div className=" flex flex-col gap-5  items-center justify-center py-10 px-6">
      <p>{message}</p>
      <button
        className="bg-blue-700 py-2 w-1/2 rounded-md text-white"
        onClick={closeModal}>
        OK
      </button>
    </div>
  );
};
