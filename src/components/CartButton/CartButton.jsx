import React, { useState } from "react";
import { useCart } from "../store/CartContext";
import CardModal from "../CardModal/CardModal";
import { MdDelete } from "react-icons/md";

const CartButton = () => {
  const { cart, dispatch } = useCart();
  const [showModal, setShowModal] = useState(false);

  // Calculate total amount by summing up the prices of all items in the cart
  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-full"
      >
        Cart ({cart.length} items)
      </button>
      <CardModal show={showModal} onClose={handleCloseModal}>
        
        {cart.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <>
            <ul className="text-black">
              {cart.map((item, index) => (
                <div className="flex flex-col my-4">
                    <div>
                    <li
                  key={index}
                  className="mb-2 p-2 border mt-2 rounded flex justify-between border-4 border-black"
                >
                  <span className="font-bold px-2">
                    {item.name}
                  </span>
                  <span className="px-2">(${item.price.toFixed(2)})</span>
                  <div>
                    <button className="font-bold px-2 border border-[#771f08] mx-2 bg-white"
                      onClick={() =>
                        dispatch({
                          type: "DECREMENT_QUANTITY",
                          itemId: item.id,
                        })
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button className="font-bold px-2 bg-[#771f08] mx-2 text-white"
                      onClick={() =>
                        dispatch({
                          type: "INCREMENT_QUANTITY",
                          itemId: item.id,
                        })
                      }
                    >
                      +
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: "DELETE_ITEM", itemId: item.id })
                      }
                    >
                      <MdDelete />

                    </button>
                  </div>
                  
                </li>
                    </div>
                   
                </div>
              ))}
              <div className="flex justify-end">
                    <button className="bg-[#771f08] text-white rounded-full px-6 mx-2 py-2">Order</button>
                  </div>
            </ul>
            
            <div className="mt-4 text-right">
              <strong className="text-black">
                Total: ${totalAmount.toFixed(2)}
              </strong>
            </div>
          </>
        )}
      </CardModal>
    </>
  );
};

export default CartButton;
