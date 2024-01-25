import React from 'react';
import { GrFormClose } from 'react-icons/gr';

type ModalProps = {
  toggleModal: () => void;
  form: JSX.Element;
};

export function Modal({ toggleModal, form }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-40">
      <div className="absolute z-50 w-1/3 rounded-md h-1/3 text-base px-4 py-4 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <GrFormClose onClick={toggleModal} />
        {form}
      </div>
    </div>
  );
}
