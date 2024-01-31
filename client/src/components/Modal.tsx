import { GrFormClose } from 'react-icons/gr';

type ModalProps = {
  toggleModal: () => void;
  form: JSX.Element;
  modalType: string;
};

const styling =
  'absolute z-50 rounded-lg  pb-8 text-base w-[20%] rounded-lg text-base pb-2 rounded-t-xl bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
export function Modal({ toggleModal, form, modalType }: ModalProps) {
  return (
    <div>
      <div
        onClick={toggleModal}
        className="absolute inset-0 bg-black bg-opacity-80 z-40"></div>
      <div className={styling}>
        <div className="flex justify-between bg-blue-700 rounded-t-lg py-2 px-4 border-blue-700-2">
          <div>
            <p className="text-white text-lg ml-4 text-center">
              {modalType === 'register' && 'Let’s create your account!'}
              {modalType === 'login' && 'Welcome back!'}
            </p>
          </div>
          <GrFormClose color="white" size={24} onClick={toggleModal} />
        </div>
        <div className="flex justify-center items-center">{form}</div>
      </div>
    </div>
  );
}
