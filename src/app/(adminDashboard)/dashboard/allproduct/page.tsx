import ProductTable from "@/components/shared/Ui/productTable/ProductTable";
import { processEnv } from "@next/env";

const Allproductpage = async () => {
  const res = await fetch(`${process.env.API_URL}/laptops`, {
    cache: "no-store",
  });
  const products = await res.json();
  return (
    <div>
      <ProductTable products={products} />
    </div>
  );
};

export default Allproductpage;
