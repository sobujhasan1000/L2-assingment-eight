"use client";
import { Button } from "@mui/material";
import ProductCard from "../shared/Ui/productCard/ProductCard";
import { Product } from "./../../types/index";
const FlashSale = ({ products }: { products: Product[] }) => {
  const flashSaleProducts = products.filter(
    (product) => product.flashSale === true
  );

  return (
    <div className="my-10">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Flash Sale</h1>
        <Button>See All</Button>
      </div>

      <div className="grid grid-cols-4 gap-4 my-6">
        {flashSaleProducts.slice(0, 4).map((product) => (
          <ProductCard key={product.brand} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
