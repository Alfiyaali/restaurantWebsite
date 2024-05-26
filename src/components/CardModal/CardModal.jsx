import React from "react";
import ReactDOM from "react-dom";
import { useCart } from "../store/CartContext";

const CartModal = ({ cartItems, onClose }) => {
  const { cart } = useCart();

  return ReactDOM.createPortal(
    <div className="fixed inset-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-11/12 sm:w-80 max-w-lg mx-auto border-4 border-black">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="mb-4">
              <p>
                {item.quantity} x {item.name} - ${item.price}
              </p>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className="flex justify-end mt-4">
          <button
            className="text-[#771f08] border-2 border-[#771f08] bg-white px-6 mx-2 py-2 rounded-full"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="bg-[#771f08] text-white px-6 py-2 rounded-full"
            onClick={onClose}
          >
            Order
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default CartModal;