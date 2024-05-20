import ProductDetail from "@/components/shared/Ui/productDetail/ProductDetail";

interface laptopDetails {
  params: {
    productId: string;
  };
}

const Detailspage = async ({ params }: laptopDetails) => {
  // console.log(params);
  const res = await fetch(`http://localhost:5000/products/${params.productId}`);
  const laptopDetails = await res.json();
  console.log(laptopDetails);
  return (
    <div>
      <ProductDetail laptopDetails={laptopDetails} />
    </div>
  );
};

export default Detailspage;
