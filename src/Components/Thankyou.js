import React from "react";

function Thankyou() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Thank You for Your Purchase!
        </h2>
        <p className="text-gray-700 text-lg mb-4">
          Your order has been successfully placed. We appreciate your business!
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-green-500 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <p className="text-gray-600 text-sm">
          You will receive an email confirmation shortly. If you have any
          questions, please contact our support team.
        </p>
      </div>
    </div>
  );
}

export default Thankyou;
