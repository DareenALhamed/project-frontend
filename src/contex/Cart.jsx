import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContexProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localStorage.getItem("cartItems"));

  
  const removeFromCart = (item) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };
  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
    value={{
      cartItems,
      removeFromCart,
      clearCart,
      getCartTotal,
    }}
  >
    {children}
  </CartContext.Provider>
  );
};

export default CartContexProvider;
