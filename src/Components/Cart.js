// import React, { useState, useEffect } from "react";

// function Cart() {
//   const [cartItems, setCartItems] = useState(
//     JSON.parse(localStorage.getItem("cart")) || []
//   );

//   const updateQuantity = (index, newQuantity) => {
//     const updatedCartItems = [...cartItems];
//     updatedCartItems[index].quantity = newQuantity;
//     setCartItems(updatedCartItems);
//     localStorage.setItem("cart", JSON.stringify(updatedCartItems));
//   };

//   const removeItem = (index) => {
//     const updatedCartItems = cartItems.filter((item, i) => i !== index);
//     setCartItems(updatedCartItems);
//     localStorage.setItem("cart", JSON.stringify(updatedCartItems));
//   };

//   const total = cartItems.reduce((accumulator, item) => {
//     return accumulator + item.price * item.quantity;
//   }, 0);

//   return (
//     <>
//       <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
//         {cartItems.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <>
//             <div className="mt-4 mb-4 text-xl font-semibold text-center">
//               Total Price: ${total.toFixed(2)}
//             </div>
//             <ul>
//               {cartItems.map((item, index) => (
//                 <li
//                   key={index}
//                   className="flex flex-col gap-12 md:flex-row items-center mb-4 border p-4"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-1/2 md:w-1/5 mb-4 md:mb-0"
//                   />
//                   <div className="md:ml-4 md:w-3/5">
//                     <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
//                     <p className="text-gray-700 mb-2">${item.price}</p>
//                     <p>
//                       <b>Quantity</b> : {item.quantity}
//                     </p>
//                     <div className="flex items-center mt-4">
//                       <select
//                         value={item.quantity}
//                         onChange={(e) =>
//                           updateQuantity(index, parseInt(e.target.value))
//                         }
//                         className="border p-2 mr-4"
//                       >
//                         {[...Array(10).keys()].map((num) => (
//                           <option key={num} value={num + 1}>
//                             {num + 1}
//                           </option>
//                         ))}
//                       </select>
//                       <button
//                         className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-700"
//                         onClick={() => removeItem(index)}
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default Cart;

import React from "react";
import { connect } from "react-redux";
import { removeFromCart, updateCartItem } from "../Redux/Actiontypes";

function Cart({ cartItems, removeFromCart, updateCartItem }) {
  const total = cartItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="mt-4 mb-4 text-xl font-semibold text-center">
              Total Price: ${total.toFixed(2)}
            </div>
            <ul>
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col gap-12 md:flex-row items-center mb-4 border p-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-1/2 md:w-1/5 mb-4 md:mb-0"
                  />
                  <div className="md:ml-4 md:w-3/5">
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    <p className="text-gray-700 mb-2">${item.price}</p>
                    <p>
                      <b>Quantity</b> : {item.quantity}
                    </p>
                    <div className="flex items-center mt-4">
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateCartItem(item.id, parseInt(e.target.value))
                        }
                        className="border p-2 mr-4"
                      >
                        {[...Array(10).keys()].map((num) => (
                          <option key={num} value={num + 1}>
                            {num + 1}
                          </option>
                        ))}
                      </select>
                      <button
                        className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-700"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
});

const mapDispatchToProps = {
  removeFromCart,
  updateCartItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
