import ProductTable from "@/components/shared/Ui/productTable/ProductTable";

const Allproductpage = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();
  return (
    <div>
      <ProductTable products={products} />
    </div>
  );
};

export default Allproductpage;
