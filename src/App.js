import React from "react";
import "./index.css"; // Make sure this import is at the top
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Productdetail from "./Components/Productdetail";
import { useState, useEffect } from "react";
import Thankyou from "./Components/Thankyou";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/product/:id"
            element={<Productdetail products={products} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
