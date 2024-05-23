"use client";

import { useState, useEffect } from "react";
import { Product } from "@/types";
import Image from "next/image";

const Carusol = ({ products }: { products: Product[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [products.length]);

  return (
    <div
      className="mt-4 flex items-center justify-center"
      style={{ height: "200px" }}
    >
      <div
        className="carousel carousel-center w-3/4 py-4 mx-4 flex justify-center items-center overflow-hidden relative"
        style={{ height: "200px" }}
      >
        {products.map((product, index) => (
          <div
            key={product._id}
            className={`carousel-item w-full absolute transition-transform duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transform: `translateX(${100 * (index - currentIndex)}%)`,
              height: "200px",
            }}
          >
            <Image
              src={product.imageLink}
              alt={product.productName}
              height={300}
              width={200}
              className="h-full w-80 mx-auto rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carusol;
