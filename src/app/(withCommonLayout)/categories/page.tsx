import BrandCard from "@/components/shared/Ui/brandCard/BrandCard";
import { Product } from "@/types";

const page = async () => {
  const res = await fetch(`${process.env.API_URL}/laptops`, {
    next: { revalidate: 30 },
  });
  const products = await res.json();
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 my-6">
        {products.slice(0, 8).map((product: Product) => (
          <BrandCard key={product.brand} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
