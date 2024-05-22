import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="relative w-full" style={{ height: "500px" }}>
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="https://i.pinimg.com/originals/0b/5f/c8/0b5fc864c174f4bea7e93892e5eeb00a.jpg"
            alt="banner"
            layout="intrinsic"
            width={1920}
            height={600}
            objectFit="contain"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute top-20 left-0 w-full h-full flex items-center pl-10 z-10">
          <div className="text-left text-green-500">
            <h1 className="text-4xl font-bold">Smart Technology</h1>
            <p className="mt-2 text-lg text-left">
              we deliver our vision of Smarter Technology for All through <br />
              products, solutions, software, and services that individuals,
              <br />
              communities, businesses, and entire populations need to fulfill
              their potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
