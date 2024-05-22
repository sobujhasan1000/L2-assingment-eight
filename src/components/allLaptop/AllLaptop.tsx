"use client";
import { Product } from "@/types";
import React, { useState } from "react";
import AllLaptopCard from "../allLaptopsCard/AllLaptopCard";

const AllLaptop = ({ products }: { products: Product[] }) => {
  console.log(products);

  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const filteredProducts = selectedBrand
    ? products.filter(
        (product) => product.brand.toLowerCase() === selectedBrand.toLowerCase()
      )
    : products;

  return (
    <div>
      <div className="grid grid-cols-5 grid-flow-col-dense">
        <div className="col-span-1 bg-slate-400">
          <div className=" grid grid-rows-3 gap-4 text-center mt-10">
            <div>
              <h1 className="text-xl py-4">price Range</h1>
              <div className="grid  gap-4 mx-10">
                <button className="bg-green-200 px-6 rounded-md">5k-10k</button>
                <button className="bg-green-200 px-6 rounded-md">
                  10k-15k
                </button>
                <button className="bg-green-200 px-6 rounded-md">
                  15k-20k
                </button>
                <button className="bg-green-200 px-6 rounded-md">
                  20k-100k
                </button>
              </div>
            </div>
            <div>
              <h1 className="text-xl py-4">Brand</h1>
              <div className="grid grid-cols-2 gap-4 mx-6 text-center">
                <button
                  className={`bg-green-200 px-6 rounded-md ${
                    selectedBrand === "Asus" ? "bg-green-500" : ""
                  }`}
                  onClick={() => setSelectedBrand("Asus")}
                >
                  Asus
                </button>
                <button
                  className={`bg-green-200 px-4 rounded-md ${
                    selectedBrand === "Samsung" ? "bg-green-500" : ""
                  }`}
                  onClick={() => setSelectedBrand("Samsung")}
                >
                  Samsung
                </button>
                <button
                  className={`bg-green-200 px-6 rounded-md ${
                    selectedBrand === "Apple" ? "bg-green-500" : ""
                  }`}
                  onClick={() => setSelectedBrand("Apple")}
                >
                  Apple
                </button>
                <button
                  className={`bg-green-200 px-6 rounded-md ${
                    selectedBrand === "HP" ? "bg-green-500" : ""
                  }`}
                  onClick={() => setSelectedBrand("HP")}
                >
                  HP
                </button>
                <button
                  className="bg-green-200 px-6 rounded-md "
                  onClick={() => setSelectedBrand(null)}
                >
                  All
                </button>
              </div>
            </div>
            <div>
              <h1 className="text-xl py-4">Rating</h1>
              <div className="grid  gap-4 mx-10">
                <button className="bg-green-200 px-6 rounded-md">1 Star</button>
                <button className="bg-green-200 px-6 rounded-md">2 Star</button>
                <button className="bg-green-200 px-6 rounded-md">3 Star</button>
                <button className="bg-green-200 px-6 rounded-md">4 Star</button>
                <button className="bg-green-200 px-6 rounded-md">5 Star</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-zinc-300">
          <div className="grid grid-cols-3 gap-6 my-6 p-8">
            {filteredProducts.map((product: Product) => (
              <AllLaptopCard key={product.brand} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllLaptop;
