"use client";
import { Product } from "@/types";
import Image from "next/image";

const Detailpage = ({ details }: { details: Product | undefined }) => {
  if (!details) {
    return <div>Loading...</div>;
  }
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <Image src={details.imageLink} alt="Album" width={400} height={400} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{details.productName}</h2>
        <p>{details.brand}</p>
        <p>{details.productTitle}</p>
        <p>{details.price}</p>
        <p>{details.productDetails}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
