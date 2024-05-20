import ProductCard from "@/components/shared/Ui/productCard/ProductCard";
import { Product } from "@/types";

const page = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 my-6">
        {products.slice(0, 8).map((product: Product) => (
          <ProductCard key={product.brand} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
