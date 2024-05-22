import Banner from "@/components/Banner/Banner";
import Carusol from "@/components/Banner/Carusol";
import FlashSale from "@/components/FlashSale/flashSale";

import Mostpopular from "@/components/TendingProduct/TendingProducts";
import TopCatagoris from "@/components/TopBands/TopBand";
const Homepage = async () => {
  const res = await fetch(`${process.env.API_URL}/products`, {
    next: { revalidate: 30 },
  });
  const products = await res.json();
  // console.log(products);
  return (
    <div>
      <Banner />
      <Carusol products={products} />
      <FlashSale products={products} />
      <TopCatagoris products={products} />
      <Mostpopular products={products} />
    </div>
  );
};

export default Homepage;
