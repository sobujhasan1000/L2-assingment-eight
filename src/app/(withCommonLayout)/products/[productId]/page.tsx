// import ProductDetail from "@/components/shared/Ui/productDetail/ProductDetail";

// interface laptopDetails {
//   params: {
//     productId: string;
//   };
// }

// const Detailspage = async ({ params }: laptopDetails) => {
//   console.log(params);
//   const res = await fetch(`https://project-test-server-r5ab9c517-sobujhasan1000s-projects.vercel.app/${params.productId}`);
//   const laptopDetails = await res.json();
//   console.log(laptopDetails);
//   return (
//     <div>
//       <ProductDetail laptopDetails={laptopDetails} />
//     </div>
//   );
// };

// export default Detailspage;

const page = () => {
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default page;
