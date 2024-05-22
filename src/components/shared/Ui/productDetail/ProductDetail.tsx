"use client";
import { Product } from "@/types";
import Image from "next/image";

const Detailpage = ({ details }: { details: Product | undefined }) => {
  if (!details) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/2">
          <Image
            src={details.imageLink}
            alt={details.productName}
            width={500}
            height={500}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">{details.productName}</h2>
            <h3 className="text-xl text-gray-700 mb-2">
              Brand: {details.brand}
            </h3>
            <p className="text-gray-600 mb-4">Title: {details.productTitle}</p>
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Price: ${details.price}
            </p>
            <p className="text-gray-600">details: {details.productDetails}</p>
          </div>
          <div className="mt-4">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              Add to Cart
            </button>
            <button className="w-full bg-green-500 text-white py-2 px-4 mt-2 rounded hover:bg-green-600 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
