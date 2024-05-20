import { Button } from "@mui/material";
import ProductCard from "../shared/Ui/productCard/ProductCard";
import { Product } from "@/types";
import Link from "next/link";

const Mostpopular = ({ products }: { products: Product[] }) => {
  const popularProducts = products.filter((produst) => produst.likes >= 50);
  console.log(popularProducts);
  return (
    <div className="my-10">
      <div className="flex justify-between my-6">
        <div className="text-left">
          <h1 className="text-2xl font-bold">Trending Product</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            asperiores quo ipsam quod! <br /> Ullam tenetur perspiciatis eveniet
            accusantium veritatis. Quos.
          </p>
        </div>
        <div>
          <Link href="products">
            <Button>view All</Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 my-6">
        {popularProducts.slice(0, 8).map((product) => (
          <ProductCard key={product.brand} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Mostpopular;
