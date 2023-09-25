import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero h-[30vh] md:h-[100vh] xl:h-[70vh] w-full mx-auto"
      style={{
        backgroundImage: 'url(https://i.ibb.co/18YYHV4/banner-image.png)',
      }}
    >
      <div className="hero-overlay bg-[#FFFFFFF2] bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="text-lg md:text-3xl xl:text-6xl bg-opacity-100 text-black font-extrabold w-max text-center">
            I Grow By Helping People In Need
          </h1>
          <div className="relative mt-5 lg:mt-16 lg:mx-16">
            <input
              type="text"
              placeholder="Search here...."
              className="input input-bordered w-full pr-16"
            />
            <Link>
              <button className="btn absolute top-0 right-0 rounded-l-none bg-[#FF444A] text-white hover:bg-sky-600">
                Search
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
