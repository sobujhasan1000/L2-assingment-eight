import { Button } from "@mui/material";
import ProductCard from "../shared/Ui/productCard/ProductCard";

const TopCatagoris = () => {
  return (
    <div>
      <div className="my-6">
        <h1 className="text-center text-2xl font-bold">
          Now Top catagories Products
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
          maiores asperiores porro quia quos <br />
          corporis explicabo, libero dolores voluptatem minus.
        </p>
        <ProductCard />
      </div>
      <Button className="my-4">View All</Button>
    </div>
  );
};

export default TopCatagoris;
