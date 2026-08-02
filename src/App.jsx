import { useState } from "react";

import Navbar from "./components/Navbar";
import FoodMenu from "./components/FoodMenu";
import Cart from "./components/Cart";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";


function App() {

  const [cart, setCart] = useState([]);

  const [category, setCategory] = useState("All");

  const [search, setSearch] = useState("");


  function addToCart(item) {

    const existingItem = cart.find(
      (cartItem) => cartItem.id === item.id
    );


    if (existingItem) {

      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1
              }
            : cartItem
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...item,
          quantity: 1
        }
      ]);

    }

  }


  function increaseQuantity(id) {

    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );

  }


  function decreaseQuantity(id) {

    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      )
    );

  }


  function removeItem(id) {

    setCart(
      cart.filter((item) => item.id !== id)
    );

  }


  return (

    <div>

      <Navbar cartCount={cart.length} />


      <SearchBar 
        setSearch={setSearch}
      />


      <CategoryFilter 
        setCategory={setCategory}
      />


      <FoodMenu
        addToCart={addToCart}
        category={category}
        search={search}
      />


      <Cart
  cart={cart}
  setCart={setCart}
  increaseQuantity={increaseQuantity}
  decreaseQuantity={decreaseQuantity}
  removeItem={removeItem}
/>   


    </div>

  );

}

export default App;