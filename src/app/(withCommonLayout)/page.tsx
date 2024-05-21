import Carusol from "@/components/Banner/Carusol";
import FlashSale from "@/components/FlashSale/flashSale";
import Mostpopular from "@/components/TendingProduct/TendingProducts";
import TopCatagoris from "@/components/TopBands/TopBand";
const Homepage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: { revalidate: 30 },
  });
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
