import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

function Homepage() {
  const [currentPage, setCurrentpage] = useState(1);
  const [postsPerpage, setPostsperPage] = useState(6);
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        setProducts(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

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

  const handleSearch = () => {
    if (name.trim() === "") {
      setProducts(products);
    } else {
      const filteredData = products.filter((product) =>
        product.title.toLowerCase().includes(name.toLowerCase())
      );
      setProducts(filteredData);
      console.log(filteredData);
    }
  };

  const lastPostindex = currentPage * postsPerpage;
  const firstPostindex = lastPostindex - postsPerpage;
  const currentPosts = products.slice(firstPostindex, lastPostindex);

  return (
    <div>
      <div className="flex items-center justify-center">
        <input
          placeholder="Search name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-4 mr-2"
        />
        <button
          className="p-4 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {loading ? (
        <h1 className="p-4">Loading ...</h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {currentPosts.map((product) => (
            <div key={product.id} className="border p-4">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="mb-2 w-full h-auto"
                />
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-700 mb-2">${product.price}</p>
                <p className="text-gray-600 mb-4">{product.description}</p>
              </Link>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}

      <div>
        <Pagination
          totalPost={products.length}
          postsPerpage={postsPerpage}
          setCurrentpage={setCurrentpage}
        />
      </div>
    </div>
  );
}

export default Homepage;
