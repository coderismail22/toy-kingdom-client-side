import img1 from "../../../assets/mathtoys/1.jpg";
import img2 from "../../../assets/mathtoys/3.jpg";
import img3 from "../../../assets/mathtoys/5.jpg";
const Trending = () => {
  return (
<div>
<h1 className="text-2xl font-bold text-center uppercase italic mb-5 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-500">On trend</h1>
<div className="flex items-center justify-center" >
      <div className="flex items-center  max-w-xl border border-violet-500 p-5 gap-3">
        <div className="border-e-2">
          <img src={img1} alt="toyImg" />
        </div>
        <div className="border-e-2">
          <img src={img2} alt="toyImg" />
        </div>
        <div >
          <img src={img3} alt="toyImg" />
        </div>
      </div>
    </div>
</div>
  );
};

export default Trending;
