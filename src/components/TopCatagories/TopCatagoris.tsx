import { Button } from "@mui/material";
import ProductCard from "../shared/Ui/productCard/ProductCard";
import { Product } from "@/types";

const TopCatagoris = ({ products }: { products: Product[] }) => {
  const topBrans = products.filter((bands) => bands.rating >= 4);
  // console.log(topbrans);
  return (
    <div>
      <div className="my-6">
        <h1 className="text-center text-2xl font-bold">
          Now Top Brand Products
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
          maiores asperiores porro quia quos <br />
          corporis explicabo, libero dolores voluptatem minus.
        </p>
        <div className="grid grid-cols-2 gap-2">
          {topBrans.slice(0, 6).map((product) => (
            <ProductCard key={product.brand} product={product} />
          ))}
        </div>
      </div>
      <Button className="my-4">View All</Button>
    </div>
  );
};

export default TopCatagoris;
