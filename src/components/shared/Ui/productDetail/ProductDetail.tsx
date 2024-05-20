import { Product } from "@/types";
import Image from "next/image";

const ProductDetail = ({
  laptopDetails,
}: {
  laptopDetails: Product | undefined;
}) => {
  if (!laptopDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <Image
          src={laptopDetails.imageLink}
          alt="Album"
          width={400}
          height={400}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{laptopDetails.productName}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
