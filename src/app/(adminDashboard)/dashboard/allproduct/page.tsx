import ProductTable from "@/components/shared/Ui/productTable/ProductTable";

const Allproductpage = async () => {
  const res = await fetch(
    "https://project-test-server-r5ab9c517-sobujhasan1000s-projects.vercel.app/products"
  );
  const products = await res.json();
  return (
    <div>
      <ProductTable products={products} />
    </div>
  );
};

export default Allproductpage;
