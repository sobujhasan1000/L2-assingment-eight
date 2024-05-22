"use client";

import { Product } from "@/types";
import Image from "next/image";

const Carusol = ({ products }: { products: Product[] }) => {
  return (
    <div
      className="mt-4 flex items-center justify-center"
      style={{ height: "200px" }}
    >
      <div
        className="carousel carousel-center w-3/4  py-4 mx-4 flex justify-center items-center "
        style={{ height: "200px" }}
      >
        {products.map((product) => (
          <div key={product._id} className="carousel-item w-1/2">
            <Image
              src={product.imageLink}
              alt=""
              height={300}
              width={200}
              className="h-44"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carusol;
