import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-semibold">My Store</div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/cart" className="hover:text-gray-300">
            Cart
          </Link>
          <Link to="/checkout" className="hover:text-gray-300">
            Checkout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
