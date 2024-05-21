import Carusol from "@/components/Banner/Carusol";
import FlashSale from "@/components/FlashSale/flashSale";
import Mostpopular from "@/components/TendingProduct/TendingProducts";
import TopCatagoris from "@/components/TopBands/TopBand";
const Homepage = async () => {
  const res = await fetch(
    "https://project-test-server-r5ab9c517-sobujhasan1000s-projects.vercel.app/products",
    {
      next: { revalidate: 30 },
    }
  );
  const products = await res.json();
  // console.log(products);
  return (
    <div>
      <Carusol />
      <FlashSale products={products} />
      <TopCatagoris products={products} />
      <Mostpopular products={products} />
    </div>
  );
};

export default Homepage;
