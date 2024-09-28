import { createContext, useContext, useState } from "react";

export const Cartcontext = createContext(null);

export const useCart = () => {
  const cart = useContext(Cartcontext);
  return cart;
};

export const CartProvider = (props) => {
  const [item, setitem] = useState([]);

  const addItemToCart = (newItem) => {
    const existingItem = item.find((i) => i.title === newItem.title);
    if (existingItem) {
      setitem(
        item.map((i) =>
          i.title === newItem.title ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setitem([...item, { ...newItem, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (itemToRemove) => {
    setitem(item.filter((i) => i.title !== itemToRemove.title));
  };

  const increaseQuantity = (itemToUpdate) => {
    setitem(
      item.map((i) =>
        i.title === itemToUpdate.title ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decreaseQuantity = (itemToUpdate) => {
    setitem(
      item
        .map((i) =>
          i.title === itemToUpdate.title && i.quantity > 1
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  return (
    <Cartcontext.Provider
      value={{
        item,
        setitem,
        addItemToCart,
        removeItemFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {props.children}
    </Cartcontext.Provider>
  );
};
