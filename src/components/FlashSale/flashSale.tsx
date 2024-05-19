"use client";
import Image from "next/image";
import { Button } from "@mui/material";
import ProductCard from "../shared/Ui/productCard/ProductCard";
import { Product } from "./../../types/index";
const FlashSale = ({ products }: { products: Product[] }) => {
  return (
    <div className="my-10">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Flash Sale</h1>
        <Button>See All</Button>
      </div>

      <div className="grid grid-cols-3 gap-4 my-6">
        {products.slice(0, 6).map((product) => (
          <ProductCard key={product.brand} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
