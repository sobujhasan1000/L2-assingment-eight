import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

const BrandCard = ({ product }: { product: Product | undefined }) => {
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="card card-compact bg-sky-300 h-96 shadow-xl my-4">
      <figure>
        <Image
          className="w-full"
          src={product.imageLink}
          width={300}
          height={300}
          alt={product.brand}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.brand}</h2>
        <p>Rating {product.rating}</p>
        <div className="card-actions justify-end">
          <Link href={`/laptops?brand=${product.brand}`}>
            <button className="btn bg-cyan-300">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
