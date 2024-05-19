import { Button } from "@mui/material";
import ProductCard from "../shared/Ui/productCard/ProductCard";

const Mostpopular = () => {
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
      <div>
        <ProductCard />
      </div>
    </div>
  );
};

export default Mostpopular;
