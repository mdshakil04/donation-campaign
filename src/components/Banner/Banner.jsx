const Banner = () => {
  return (
    <div className=" md:p-12 p-2">
      <div
        className="bg-opacity-90 hero lg:h-[600px] w-auto "
        style={{
          backgroundImage:
            "url(https://i.ibb.co/k0ybRyL/Banner-bg.png)",
        }}
      >
        <div className="hero-overlay bg-[#FFFFFFF2] bg-opacity-90"></div>
        <div className="text-center text-neutral-content">
          <div className="">
            <h1 className="text-5xl mb-14 font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>
            <div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button className="btn bg-[#FF444A] text-white ">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
