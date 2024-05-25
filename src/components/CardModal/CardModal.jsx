import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const CartModal = () => {
  useEffect(() => {
    // Create a div element for the cart modal
    const cartModalRoot = document.createElement('div');
    cartModalRoot.id = 'cart-modal-root';
    document.body.appendChild(cartModalRoot);

    // Cleanup function to remove the dynamically created div when unmounting
    return () => {
      document.body.removeChild(cartModalRoot);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        <ul>
          <li className="flex justify-between items-center mb-2">
            <span>Item 1</span>
            <span>$10.99</span>
          </li>
          <li className="flex justify-between items-center mb-2">
            <span>Item 2</span>
            <span>$15.99</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Item 3</span>
            <span>$8.99</span>
          </li>
        </ul>
        <div className="flex justify-end mt-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4">Close</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Order</button>
        </div>
      </div>
    </div>,
    document.getElementById('cart-modal-root') // Use the dynamically created div for portal
  );
};

export default CartModal;
