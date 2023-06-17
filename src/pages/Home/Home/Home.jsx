import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Manufacturers from "../Manufacturers/Manufacturers";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Trending from "../Trending/Trending";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Toy Kingdom</title>
      </Helmet>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <Trending></Trending>
      <Manufacturers></Manufacturers>
    </div>
  );
};

export default Home;
