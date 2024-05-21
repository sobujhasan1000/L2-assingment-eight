import ProductDetail from "@/components/shared/Ui/productDetail/ProductDetail";

interface laptopDetails {
  params: {
    productId: string;
  };
}

const Detailspage = async ({ params }: laptopDetails) => {
  const { productId } = params;
  console.log(params);
  const res = await fetch(`${process.env.API_URL}/products/${productId}`);
  const laptopDetails = await res.json();
  console.log(laptopDetails);
  return (
    <div>
      <ProductDetail laptopDetails={laptopDetails} />
    </div>
  );
};

export default Detailspage;
