import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

const AllLaptopCard = ({ product }: { product: Product | undefined }) => {
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={product.imageLink} alt="Shoes" height={200} width={300} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.productName}</h2>
        <p>{product.productDetails}</p>
        <div className="card-actions justify-end">
          <Link href={`/products/${product._id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllLaptopCard;
