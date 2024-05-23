import React, { useState } from "react";

const Contractpage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">
        Contact Us
      </h1>
      <div className="bg-white shadow-md p-8 rounded-lg">
        <p className="text-lg mb-6">
          If you have any questions, suggestions, or feedback, please feel free
          to contact us using the form below.
        </p>
        <p className="text-lg mb-6">
          We value your input and strive to provide the best experience for our
          users.
        </p>
        <p className="text-lg mb-6">Thank you for reaching out to us!</p>
        <div className="text-lg">
          <p className="mb-4">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@example.com"
              className="text-blue-600 hover:underline"
            >
              contact@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contractpage;
