import React from "react";
import { useParams } from "react-router-dom";

function Productdetail({ products }) {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  const addToCart = (product) => {
    // Get existing cart items from localStorage or initialize an empty array
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingProduct = cartItems.find((item) => item.id === product.id);

    // If the product is not in the cart, add it; otherwise, update the quantity
    if (!existingProduct) {
      cartItems.push({ ...product, quantity: 1 });
    } else {
      existingProduct.quantity++;
    }

    // Save the updated cart items to localStorage
    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert("Product added to cart!");
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4">
      <img
        src={product.image}
        alt={product.title}
        className="mb-2 w-8/16 mx-auto h-auto"
      />
      <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Productdetail;
