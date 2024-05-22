"use client";
import Image from "next/image";
import { Product } from "@/types";
import Link from "next/link";

const TendingCard = ({ product }: { product: Product | undefined }) => {
  if (!product) {
    return <div>Loading...</div>;
  }
  // console.log(product);
  return (
    <div className="card  image-full  mx-auto h-60 w-full ">
      <figure>
        <Image
          className=""
          src={product.imageLink}
          alt="Shoes"
          width={400}
          height={200}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.productName}</h2>
        <p></p>
        <div className="card-actions justify-end">
          <Link href="/laptops">
            <button className="btn bg-cyan-300">details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TendingCard;
