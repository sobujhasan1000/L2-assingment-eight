import ProductTable from "@/components/shared/Ui/productTable/ProductTable";
import { processEnv } from "@next/env";

const Allproductpage = async () => {
  const res = await fetch(`${process.env.API_URL}/products`, {
    next: { revalidate: 30 },
  });
  const products = await res.json();
  return (
    <div>
      <ProductTable products={products} />
    </div>
  );
};

export default Allproductpage;
