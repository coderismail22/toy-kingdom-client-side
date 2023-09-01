import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Manufacturers from "../Manufacturers/Manufacturers";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Trending from "../Trending/Trending";
import ParticlesComponent from "../../../componentChunks/ParticlesComponent/ParticlesComponent";
import Speciality from "../Speciality/Speciality";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Toy Kingdom</title>
      </Helmet>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <Speciality></Speciality>
      <Featured></Featured>
      <Testimonial></Testimonial>
      <Manufacturers></Manufacturers>
      <Contact></Contact>

      {/* <ParticlesComponent></ParticlesComponent> */}
    </div>
  );
};

export default Home;
