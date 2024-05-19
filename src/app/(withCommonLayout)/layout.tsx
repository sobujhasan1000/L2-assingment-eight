import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

const CommonLayOut = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-10">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default CommonLayOut;
