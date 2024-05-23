"use client";
import { Product } from "@/types";
import React, { useState } from "react";
import AllLaptopCard from "../allLaptopsCard/AllLaptopCard";
const areArraysEqual = (
  array1: [number, number] | null,
  array2: [number, number] | null
) => {
  if (!array1 || !array2) return false;
  return array1[0] === array2[0] && array1[1] === array2[1];
};

const AllLaptop = ({ products }: { products: Product[] }) => {
  console.log(products);

  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<
    [number, number] | null
  >(null);

  const filteredProducts = products.filter((product) => {
    const brandMatches = selectedBrand
      ? product.brand.toLowerCase() === selectedBrand.toLowerCase()
      : true;
    const priceMatches = selectedPriceRange
      ? product.price >= selectedPriceRange[0] &&
        product.price <= selectedPriceRange[1]
      : true;
    return brandMatches && priceMatches;
  });

  return (
    <div>
      <div className="grid grid-cols-5 grid-flow-col-dense">
        <div className="col-span-1 bg-slate-400">
          <div className=" grid grid-rows-3 gap-4 text-center mt-10">
            <div>
              <h1 className="text-xl py-4">price Range</h1>
              <div className="grid  gap-4 mx-10">
                <button
                  className={`bg-green-200 px-6 rounded-md ${
                    areArraysEqual(selectedPriceRange, [5000, 10000])
                      ? "bg-green-500"
                      : ""
                  }`}
                  onClick={() => setSelectedPriceRange([5000, 10000])}
                >
                  5k-10k
                </button>
                <button
                  className={`bg-green-200 px-6 rounded-md ${
                    areArraysEqual(selectedPriceRange, [10000, 15000])
                      ? "bg-green-500"
                      : ""
                  }`}
                  onClick={() => setSelectedPriceRange([10000, 15000])}
                >
                  10k-15k
                </button>
                <button
                  className={`bg-green-200 px-6 rounded-md ${
                    areArraysEqual(selectedPriceRange, [15000, 20000])
                      ? "bg-green-500"
                      : ""
                  }`}
                  onClick={() => setSelectedPriceRange([15000, 20000])}
                >
                  15k-20k
                </button>
                <button
                  className={`bg-green-200 px-6 rounded-md ${
                    areArraysEqual(selectedPriceRange, [20000, 100000])
                      ? "bg-green-500"
                      : ""
                  }`}
                  onClick={() => setSelectedPriceRange([20000, 100000])}
                >
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
            {/* <div>
              <h1 className="text-xl py-4">Rating</h1>
              <div className="grid  gap-4 mx-10">
                <button className="bg-green-200 px-6 rounded-md">1 Star</button>
                <button className="bg-green-200 px-6 rounded-md">2 Star</button>
                <button className="bg-green-200 px-6 rounded-md">3 Star</button>
                <button className="bg-green-200 px-6 rounded-md">4 Star</button>
                <button className="bg-green-200 px-6 rounded-md">5 Star</button>
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-span-4 bg-zinc-300">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-3 gap-6 my-6 p-8">
              {filteredProducts.map((product: Product) => (
                <AllLaptopCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <h2 className="text-xl font-bold">No products found</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllLaptop;
