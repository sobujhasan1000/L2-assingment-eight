import AllLaptopCard from "@/components/allLaptopsCard/AllLaptopCard";
import ProductCard from "@/components/shared/Ui/productCard/ProductCard";
import { Product } from "@/types";
import { Button, Checkbox } from "@mui/material";

const Productspage = async () => {
  const res = await fetch("http://localhost:5000/products");
  const allLaptops = await res.json();
  return (
    <div>
      <div className="grid grid-cols-5 grid-flow-col-dense">
        <div className="col-span-1 bg-slate-400">
          <div className=" grid grid-rows-3 gap-4 text-center mt-10">
            <div>
              <h1 className="text-xl py-4">price Range</h1>
              <div className="grid  gap-4 mx-10">
                <button className="bg-green-200 px-6 rounded-md">5k-10k</button>
                <button className="bg-green-200 px-6 rounded-md">
                  10k-15k
                </button>
                <button className="bg-green-200 px-6 rounded-md">
                  15k-20k
                </button>
                <button className="bg-green-200 px-6 rounded-md">
                  20k-100k
                </button>
              </div>
            </div>
            <div>
              <h1 className="text-xl py-4">Brand</h1>
              <div className="grid grid-cols-2 gap-4 mx-10">
                <button className="bg-green-200 px-6 rounded-md">Assus</button>
                <button className="bg-green-200 px-6 rounded-md">
                  sumsang
                </button>
                <button className="bg-green-200 px-6 rounded-md">apple</button>
                <button className="bg-green-200 px-6 rounded-md">HP</button>
              </div>
            </div>
            <div>
              <h1 className="text-xl py-4">Rating</h1>
              <div className="grid  gap-4 mx-10">
                <button className="bg-green-200 px-6 rounded-md">1 Star</button>
                <button className="bg-green-200 px-6 rounded-md">2 Star</button>
                <button className="bg-green-200 px-6 rounded-md">3 Star</button>
                <button className="bg-green-200 px-6 rounded-md">4 Star</button>
                <button className="bg-green-200 px-6 rounded-md">5 Star</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-zinc-300">
          <div className="grid grid-cols-3 gap-4 my-6">
            {allLaptops.map((product: Product) => (
              <AllLaptopCard key={product.brand} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productspage;
