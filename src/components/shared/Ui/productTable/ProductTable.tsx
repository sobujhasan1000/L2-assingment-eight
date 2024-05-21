import { Product } from "@/types";

const ProductTable = ({ products }: { products: Product[] }) => {
  return (
    <div className="overflow-x-auto bg-emerald-300">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody className="text-xl">
          {/* row 1 */}
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.productName}</td>
              <td>{product.categories.join(", ")}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
