import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { useEffect } from "react";
import manufacturer1 from "../../../assets/manufacturers/1.png";
import manufacturer2 from "../../../assets/manufacturers/2.png";
import manufacturer3 from "../../../assets/manufacturers/3.png";
import manufacturer4 from "../../../assets/manufacturers/4.png";
import manufacturer5 from "../../../assets/manufacturers/5.png";
import manufacturer6 from "../../../assets/manufacturers/6.png";

const Manufacturers = () => {
  return (
    <div className="my-5 ">
      <h2 className="mb-4 text-2xl font-bold sm:text-4xl text-center uppercase tracking-tight text-gray-900 overline">
        Manufacturers
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center overflow-hidden">
        <div>
          <img src={manufacturer1} alt="manufacturerImg" />
        </div>
        <div>
          <img src={manufacturer2} alt="manufacturerImg" />
        </div>
        <div>
          <img src={manufacturer3} alt="manufacturerImg" />
        </div>
        <div>
          <img src={manufacturer4} alt="manufacturerImg" />
        </div>
        <div>
          <img src={manufacturer5} alt="manufacturerImg" />
        </div>
        <div>
          <img src={manufacturer6} alt="manufacturerImg" />
        </div>
        <div>
          <img src={manufacturer1} alt="manufacturerImg" />
        </div>
        <div>
          <img src={manufacturer2} alt="manufacturerImg" />
        </div>
      </div>
    </div>
  );
};

export default Manufacturers;
