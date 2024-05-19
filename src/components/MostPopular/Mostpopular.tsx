import { Button } from "@mui/material";
import ProductCard from "../shared/Ui/productCard/ProductCard";
import { Product } from "@/types";

const Mostpopular = ({ products }: { products: Product[] }) => {
  return (
    <div className="my-10">
      <div className="flex justify-between my-6">
        <div className="text-left">
          <h1 className="text-2xl font-bold">Most popular Product</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            asperiores quo ipsam quod! <br /> Ullam tenetur perspiciatis eveniet
            accusantium veritatis. Quos.
          </p>
        </div>
        <div>
          <Button>view All</Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 my-6">
        {products.slice(0, 8).map((product) => (
          <ProductCard key={product.brand} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Mostpopular;
