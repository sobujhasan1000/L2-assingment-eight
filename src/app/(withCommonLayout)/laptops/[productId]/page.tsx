import ProductDetail from "@/components/shared/Ui/productDetail/ProductDetail";
import { Product } from "@/types";

interface details {
  params: {
    productId: string;
  };
}

export const generateStaticParams = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/laptops`);
    if (!res.ok) {
      throw new Error(`Failed to fetch laptops: ${res.statusText}`);
    }
    const products = await res.json();
    return products.slice(0, 3).map((product: Product) => ({
      productId: product._id,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
};

const Detailspage = async ({ params }: details) => {
  const { productId } = params;
  // console.log(params);
  const res = await fetch(`${process.env.API_URL}/laptops/${productId}`, {
    cache: "no-store",
  });
  const details = await res.json();
  // console.log(laptopDetails);
  return (
    <div>
      <ProductDetail details={details} />
    </div>
  );
};

export default Detailspage;
