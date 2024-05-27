// PriceList.jsx
import React from "react";
import { useCart } from "../store/CartContext";

const meals = [
  { id: 1, name: 'Spaghetti Bolognese', price: 12.99 },
  { id: 2, name: 'Chicken Curry', price: 10.99 },
  { id: 3, name: 'Beef Stroganoff', price: 14.99 },
  { id: 4, name: 'Vegetable Stir Fry', price: 9.99 },
];

const PriceList = () => {
  const { dispatch } = useCart();

  const addItemToCart = (meal) => {
    dispatch({ type: 'ADD_ITEM', item: meal });
    console.log('Item added to cart:', meal);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Meals</h2>
      <ul>
        {meals.map(meal => (
          <li key={meal.id} className="flex justify-between items-center mb-4 p-4 border rounded">
            <span className="text-lg">{meal.name}</span>
            <span className="text-lg">${meal.price.toFixed(2)}</span>
            <button
              className="bg-green-500 text-white px-3 py-1 rounded"
              onClick={() => addItemToCart(meal)}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceList;
