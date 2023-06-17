import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/gallery/1.jpg";
import img2 from "../../../assets/gallery/2.jpg";
import img3 from "../../../assets/gallery/3.jpg";
import img4 from "../../../assets/gallery/4.jpg";

const Gallery = () => {
  return (
<div>
            <Carousel>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
          <div>
            <img src={img4} />
          </div>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
          <div>
            <img src={img4} />
          </div>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
          <div>
            <img src={img4} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
        </Carousel>
</div>
  );
};

export default Gallery;
