import AllLaptop from "@/components/allLaptop/AllLaptop";

const Productspage = async () => {
  const res = await fetch(`${process.env.API_URL}/laptops`);
  const allLaptops = await res.json();
  return <AllLaptop products={allLaptops} />;
};

export default Productspage;
