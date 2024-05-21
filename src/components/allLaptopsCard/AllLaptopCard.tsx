import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

const AllLaptopCard = ({ product }: { product: Product | undefined }) => {
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <Image
          className="w-full h-64"
          src={product.imageLink}
          alt="Shoes"
          height={200}
          width={300}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.productName}</h2>
        <p>{product.productDetails}</p>
        <div className="card-actions justify-end">
          <Link href={`/products/${product._id}`}>
            <button className="btn bg-cyan-300">view details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllLaptopCard;
