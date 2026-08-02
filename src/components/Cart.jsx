import { useState } from "react";

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  setCart
}) {

  const [token, setToken] = useState("");


  let total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );


  function confirmOrder() {

    const newToken =
      "SNK-" + Math.floor(100000 + Math.random() * 900000);

    setToken(newToken);

    setCart([]);

  }


  return (

    <div className="cart-box">

      <h2>Order Summary</h2>


      {
        cart.length === 0 ? (

          <p>Your cart is empty</p>

        ) : (

          cart.map((item)=>(

            <div key={item.id}>

              <h3>{item.name}</h3>

              <p>
                ₹{item.price} × {item.quantity}
              </p>


              <button onClick={() => decreaseQuantity(item.id)}>
                -
              </button>


              <span> {item.quantity} </span>


              <button onClick={() => increaseQuantity(item.id)}>
                +
              </button>


              <button onClick={() => removeItem(item.id)}>
                Remove
              </button>


            </div>

          ))

        )
      }


      <h3>
        Total: ₹{total}
      </h3>


      <button onClick={confirmOrder}>
        Confirm Order
      </button>


      {
        token && (
          <div>
            <h2>Order Confirmed 🎉</h2>
            <h3>Your Token: {token}</h3>
          </div>
        )
      }


    </div>

  );

}

export default Cart;