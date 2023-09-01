import icon1 from "../../../../public/specialIcons/icon1.svg";
import icon2 from "../../../../public/specialIcons/icon2.svg";
import icon3 from "../../../../public/specialIcons/icon3.svg";
import icon4 from "../../../../public/specialIcons/icon4.svg";
import icon5 from "../../../../public/specialIcons/icon5.svg";
import icon6 from "../../../../public/specialIcons/icon6.svg";
const Speciality = () => {
  return (
    <div className="bg-blue-400 text-white rounded-lg m-4">
      <div className="max-w-screen px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div>
          <h2 className="text-2xl font-bold sm:text-4xl text-center uppercase tracking-tight text-gray-900 overline">
            What makes us special
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3 ">
          <div className="flex items-center gap-4">
            <span className="shrink-0 bg-orange-300 p-4 rounded-full">
              <img className="w-8" src={icon1} alt="icon1" />
            </span>

            <div>
              <h2 className="text-lg font-bold uppercase ">Customer Support</h2>

              <p className="mt-1 text-sm text-gray-700 font-bold font-mono">
                I just wanted to take a moment to give a big shoutout and
                compliment to your delivery service.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="shrink-0 rounded-full bg-orange-300 p-4">
              <img className="w-8" src={icon2} alt="icon2" />
            </span>

            <div>
              <h2 className="text-lg font-bold uppercase ">Best Pricing</h2>

              <p className="mt-1 text-sm font-bold text-gray-700 font-mono">
                I just wanted to take a moment to give a big shoutout and
                compliment to your delivery service.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="shrink-0 rounded-full bg-orange-300 p-4">
              <img className="w-8" src={icon3} alt="icon3" />
            </span>

            <div>
              <h2 className="text-lg font-bold uppercase ">On Time Delivery</h2>

              <p className="mt-1 text-sm font-bold text-gray-700 font-mono">
                I just wanted to take a moment to give a big shoutout and
                compliment to your delivery service.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="shrink-0 rounded-full bg-orange-300 p-4">
              <img className="w-8" src={icon4} alt="icon4" />
            </span>

            <div>
              <h2 className="text-lg font-bold uppercase ">Easy Payment</h2>

              <p className="mt-1 text-sm font-bold text-gray-700 font-mono">
                I just wanted to take a moment to give a big shoutout and
                compliment to your delivery service.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="shrink-0 rounded-full bg-orange-300 p-4">
              <img className="w-8" src={icon5} alt="icon5" />
            </span>

            <div>
              <h2 className="text-lg font-bold uppercase ">24x7 Service</h2>

              <p className="mt-1 text-sm font-bold text-gray-700 font-mono">
                I just wanted to take a moment to give a big shoutout and
                compliment to your delivery service.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="shrink-0 rounded-full bg-orange-300 p-4">
              <img className="w-8" src={icon6} alt="icon6" />
            </span>

            <div>
              <h2 className="text-lg font-bold uppercase ">Free Delivery</h2>

              <p className="mt-1 text-sm font-bold text-gray-700 font-mono">
                I just wanted to take a moment to give a big shoutout and
                compliment to your delivery service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
