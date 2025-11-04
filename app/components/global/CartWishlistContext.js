"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartWishlistContext = createContext();

export function CartWishlistProvider({ children }) {
  // Load initial cart from localStorage
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

  // Sync cart with localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Sync wishlist with localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // ----------- CART FUNCTIONS -----------
  const addToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true); // auto open cart
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

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
      if (prev.find((i) => i.id === item.id)) return prev; // avoid duplicates
      return [...prev, item];
    });
    setIsWishlistOpen(true); // auto open wishlist
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((i) => i.id !== id));
  };

  const toggleWishlist = () => setIsWishlistOpen(!isWishlistOpen);

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
      }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
}

export const useCartWishlist = () => useContext(CartWishlistContext);
