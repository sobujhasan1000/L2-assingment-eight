import Image from "next/image";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product | undefined }) => {
  if (!product) {
    return <div>Loading...</div>;
  }
  console.log(product);
  return (
    <div className="card bg-base-100 shadow-xl image-full  mx-auto ] ">
      <figure>
        <Image src={product.imageLink} alt="Shoes" width={400} height={200} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.productTitle}</h2>
        <p></p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"></button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
