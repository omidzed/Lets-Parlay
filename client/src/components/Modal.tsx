import React from 'react';
import { GrFormClose } from 'react-icons/gr';

type ModalProps = {
  toggleModal: () => void;
  form: JSX.Element;
  modalType: string;
};

export function Modal({ toggleModal, form, modalType }: ModalProps) {
  return (
    <div>
      <div
        onClick={toggleModal}
        className="fixed  inset-0 bg-black bg-opacity-80 z-40"></div>
      <div className="absolute z-50 w-1/4 rounded-lg h-1/2 max-h-88 text-base pb-2 rounded-t-xl bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between bg-orange-500 rounded-t-lg py-2 px-4 border-orange-300-2 w-full">
          <div>
            <p className="text-white text-lg ml-6 pl-24">
              {modalType === 'register' && 'Let’s create your account!'}
            </p>
          </div>
          <GrFormClose size={24} onClick={toggleModal} />
        </div>
        <div className="flex justify-center items-center">{form}</div>
      </div>
    </div>
  );
}
