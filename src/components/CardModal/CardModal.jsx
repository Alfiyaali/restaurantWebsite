import React from 'react';
import { IoMdClose } from 'react-icons/io';

const CardModal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white p-10 rounded shadow-lg">
        <button onClick={onClose} className="absolute right-2 top-2 bg-red-500 text-white px-3 py-2 rounded">
        <IoMdClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default CardModal;
