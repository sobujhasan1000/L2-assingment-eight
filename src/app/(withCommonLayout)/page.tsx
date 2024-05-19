import Carusol from "@/components/Banner/Carusol";
import FlashSale from "@/components/FlashSale/flashSale";
import Mostpopular from "@/components/MostPopular/Mostpopular";
import TopCatagoris from "@/components/TopCatagories/TopCatagoris";
const Homepage = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();
  console.log(products);
  return (
    <div>
      <Carusol />
      <FlashSale products={products} />
      <TopCatagoris />
      <Mostpopular />
    </div>
  );
};

export default Homepage;
