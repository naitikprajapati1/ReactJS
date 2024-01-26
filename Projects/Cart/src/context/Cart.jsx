/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
export const CartContext = createContext(null);

// use Cart custom hooks
export const useCart = () => {
    const cart = useContext(CartContext);
    return cart;
}
// create a context provider
export const CartProvider = (props) => {
    const [item, setItem] = useState([]);
    return (
        <CartContext.Provider value={{ item, setItem }}>
            {props.children}
        </CartContext.Provider>
    )
}