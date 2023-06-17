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
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 4,
      spaceBetween: 10, // Reduce the spacing between slides
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
<div className="my-5">
    <h1 className="text-2xl font-bold text-center uppercase italic mb-5 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-500">Manufacturers</h1>
<div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src={manufacturer1} alt="manufacturerImg" />
        </div>
        <div className="swiper-slide">
          <img src={manufacturer2} alt="manufacturerImg" />
        </div>
        <div className="swiper-slide">
          <img src={manufacturer3} alt="manufacturerImg" />
        </div>
        <div className="swiper-slide">
          <img src={manufacturer4} alt="manufacturerImg" />
        </div>
        <div className="swiper-slide">
          <img src={manufacturer5} alt="manufacturerImg" />
        </div>
        <div className="swiper-slide">
          <img src={manufacturer6} alt="manufacturerImg" />
        </div>
      </div>
    </div>
</div>
  );
};

export default Manufacturers;
