"use client";

import Image from "next/image";

const Carusol = () => {
  return (
    <div
      className=" flex items-center justify-center bg-[url('https://t4.ftcdn.net/jpg/04/14/22/55/360_F_414225555_k4FE9n2fjaBen0QlOW1kSjaQBWfjfCjF.jpg')] bg-cover bg-center bg-no-repeat "
      style={{ height: "600px" }}
    >
      <div
        className="carousel w-96  py-4 mx-auto flex justify-center items-center"
        style={{ height: "300" }}
      >
        <div className="carousel-item w-1/2">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            alt=""
            height={200}
            width={200}
          />
        </div>
        <div className="carousel-item w-1/2">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt=""
            height={200}
            width={200}
          />
        </div>
        <div className="carousel-item w-1/2">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt=""
            height={200}
            width={200}
          />
        </div>
        <div className="carousel-item w-1/2">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            alt=""
            height={200}
            width={200}
          />
        </div>
        <div className="carousel-item w-1/2">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            alt=""
            height={200}
            width={200}
          />
        </div>
        <div className="carousel-item w-1/2">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            alt=""
            height={200}
            width={200}
          />
        </div>
        <div className="carousel-item w-1/2">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            alt=""
            height={200}
            width={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Carusol;
