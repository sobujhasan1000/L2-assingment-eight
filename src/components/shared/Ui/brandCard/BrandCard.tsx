"use client";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

const BrandCard = ({ product }: { product: Product | undefined }) => {
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="card card-compact bg-sky-300 h-96 shadow-xl my-4 ">
      <figure>
        <Image
          className="w-full"
          src={product.imageLink}
          width={300}
          height={300}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.brand}</h2>
        <p>{product.rating}</p>
        <div className="card-actions justify-end">
          <Link href="/categories">
            <button className="btn bg-cyan-300">details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
