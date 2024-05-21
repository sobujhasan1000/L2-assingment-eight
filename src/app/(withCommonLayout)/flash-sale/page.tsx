import ProductCard from "@/components/shared/Ui/productCard/ProductCard";
import { Product } from "@/types";

const FlashSalePage = async () => {
  const res = await fetch(
    "https://project-test-server-r5ab9c517-sobujhasan1000s-projects.vercel.app/products",
    {
      next: { revalidate: 30 },
    }
  );
  const products: Product[] = await res.json();
  const flashSaleProducts = products.filter(
    (product) => product.flashSale === true
  );

  return (
    <div className="my-6">
      <h1 className="text-center text-2xl py-4 font-bold">
        now our all flash sale products
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {flashSaleProducts.map((product) => (
          <ProductCard key={product.productName} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FlashSalePage;
