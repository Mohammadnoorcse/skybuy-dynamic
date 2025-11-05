"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartWishlistContext = createContext();

export function CartWishlistProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlistItems, setWishlistItems] = useState(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // ----------- CART FUNCTIONS -----------
  const addToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.find(
        (i) =>
          i.id === item.id &&
          i.selectedColor === item.selectedColor &&
          i.selectedSize === item.selectedSize
      );

      if (exists) {
        return prev.map((i) =>
          i.id === item.id &&
          i.selectedColor === item.selectedColor &&
          i.selectedSize === item.selectedSize
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }

      return [...prev, { ...item }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  const updateCartQuantity = (id, quantity) => {
    if (quantity <= 0) return removeFromCart(id);
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  // ----------- WISHLIST FUNCTIONS -----------
  const addToWishlist = (item) => {
    setWishlistItems((prev) => {
      if (
        prev.find(
          (i) =>
            i.id === item.id &&
            i.selectedColor === item.selectedColor &&
            i.selectedSize === item.selectedSize
        )
      )
        return prev;
      return [...prev, item];
    });
    setIsWishlistOpen(true);
  };

  const removeFromWishlist = (id) =>
    setWishlistItems((prev) => prev.filter((i) => i.id !== id));

  const toggleWishlist = () => setIsWishlistOpen(!isWishlistOpen);

  // ✅ New function to clear the cart
const clearCart = () => {
  setCartItems([]);
  localStorage.removeItem("cart");
};

  return (
    <CartWishlistContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        isCartOpen,
        toggleCart,
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isWishlistOpen,
        toggleWishlist,
        clearCart
      }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
}

export const useCartWishlist = () => useContext(CartWishlistContext);
