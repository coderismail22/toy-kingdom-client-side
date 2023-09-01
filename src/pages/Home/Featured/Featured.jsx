import img1 from "../../../assets/mathtoys/1.jpg";
import img2 from "../../../assets/mathtoys/3.jpg";
const Featured = () => {
  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
              <div className="max-w-md mx-auto text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 overline sm:text-4xl">
                    Featured
                  </h2>

                  <p className="mt-4 text-gray-500">
Buy the best sellings toys for your kid. Fun and learning at the same time.
                  </p>
                </header>

                <a
  className=" mt-5 group relative inline-block focus:outline-none focus:ring"
  href="/download"
>
  <span
    className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
  ></span>

  <span
    className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
  >
    Buy Now
  </span>
</a>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" className="block group">
                    <img
                      src="https://static-01.daraz.com.bd/p/fcaf1811b1efbd37d164579a91fed2ea.jpg"
                      alt=""
                      className="object-cover w-full rounded aspect-square"
                    />


                  </a>
                </li>

                <li>
                  <a href="#" className="block group">
                    <img
                      src="https://s.yimg.com/os/creatr-uploaded-images/2023-06/ff3a5a10-1754-11ee-9ef6-f5015d0a3b22"
                      alt=""
                      className="object-cover w-full rounded aspect-square"
                    />


                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
