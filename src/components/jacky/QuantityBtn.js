import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export default function QuantityBtn({ productInfo }) {
  //Need to destruct the props to get the productInfo
  const { cartItems, setCartItems } = useContext(CartContext);
  //See if the product is already in the cart
  let productIndexInCart = cartItems.findIndex((element) => {
    return element.id === productInfo.id;
  });
  //findIndex will return -1 if the product is not in the cart
  //If the product is not in the cart, add it to the cart
  //If the product is in the cart, update the quantity
  //If the quantity is 0, remove the product from the cart
  let [numInCart, setNumInCart] = useState(
    productIndexInCart === -1 ? 0 : cartItems[productIndexInCart].quantity
  );
  const handleAdd = () => {
    if (productIndexInCart === -1) {
      setCartItems([
        {
          ...productInfo,
          quantity: 1,
        },
        ...cartItems,
      ]);
    } else {
      let newCartArray = [...cartItems];
      newCartArray[productIndexInCart].quantity++;
      setCartItems(newCartArray);
    }
    setNumInCart(numInCart + 1);
  };
  const handleSubstract = () => {
    if (cartItems[productIndexInCart].quantity === 1) {
      let newCartArray = [...cartItems];
      newCartArray.splice(productIndexInCart, 1);
      // splice is a method to remove an element from an array
      setCartItems(newCartArray);
    } else {
      //If the quantity is more than 1, just substract 1 from the quantity
      let newCartArray = [...cartItems];
      newCartArray[productIndexInCart].quantity--;
      setCartItems(newCartArray);
      //...cartItems is to update the state
      //newCartArray is the new state
    }
    setNumInCart(numInCart - 1);
  };
  return (
    <div>
      {cartItems.map((item) => {
        return null; // Placeholder return value, modify as needed
      })}
      {numInCart === 0 ? (
        <div onClick={handleAdd}>Add to Shopping Cart</div>
      ) : (
        <div>
          <span onClick={handleSubstract}>-</span>
          {numInCart}
          <span onClick={handleAdd}>+</span>
        </div>
      )}
    </div>
  );
}
