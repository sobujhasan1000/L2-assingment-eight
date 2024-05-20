import Image from "next/image";
import { Product } from "@/types";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product | undefined }) => {
  if (!product) {
    return <div>Loading...</div>;
  }
  console.log(product);
  return (
    <div className="card  image-full  mx-auto ] ">
      <figure>
        <Image src={product.imageLink} alt="Shoes" width={400} height={200} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.productName}</h2>
        <p></p>
        <div className="card-actions justify-end">
          <Link href="flash-sale">
            <button className="btn btn-primary">details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
