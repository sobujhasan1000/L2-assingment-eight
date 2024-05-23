import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Page Not Found
        </h1>
        <p className="text-lg text-center mb-8">
          Sorry, the page you are looking for could not be found.
        </p>
        <Image
          width={500}
          height={400}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTcKcoquPvJ-O9WfgEYiUF34hYhzaGcrtamQ&s" // Path to your background image
          alt="Not Found"
          className="w-full rounded-lg mb-8 "
        />
        <p className="text-lg text-center">
          Return to{" "}
          <a href="/" className="text-blue-500 hover:underline">
            Homepage
          </a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
