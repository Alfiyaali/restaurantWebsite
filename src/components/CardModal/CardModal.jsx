import React from "react";
import ReactDOM from "react-dom";

const CardModal = ({ isOpen, onClose, item }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-semibold">{item.name}</h2>
        <p className="text-gray-600">{item.description}</p>
        <p className="text-gray-800 font-bold mt-2">${item.price}</p>
        <button
          className="mt-4 text-[#771f08] bg-white border border[#771f08] rounded-full mx-2 px-6 py-2 px-4"
          onClick={onClose}
        >
          Close
        </button>
        <button
          className="mt-4 bg-[#771f08] text-white border border[#771f08] rounded-full mx-2 px-6 py-2 px-4"
          onClick={onClose}
        >
          Order
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default CardModal;
