import bannerImg from "../../../assets/banner.jpg";
import ParticlesComponent from "../../../componentChunks/ParticlesComponent/ParticlesComponent";
const Banner = () => {
  return (
    <div>
      <div>{/* <ParticlesComponent></ParticlesComponent> */}</div>
      <div className="my-5">
        <div className="sm:flex">
          <div className="sm:w-1/2 flex justify-center items-center mb-4">
            <h1 className="font-bold text-5xl text-center ">
              Welcome to <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-500">
                Toy Kingdom
              </span>
            </h1>
          </div>

         
          <div className="sm:w-1/2">
            <img className="rounded-md" src={bannerImg} alt="banner-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
