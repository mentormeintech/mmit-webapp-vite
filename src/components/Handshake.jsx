const Handshake = () => {
  return (
    <div className="relative h-[30rem] lg:h-full">
      <img
        width={1000}
        height={50}
        alt=""
        className="w-full h-full md:pt-16"
        src="images/dim.png"
      />
      <div className="absolute left-0 top-[35%] w-full pl-[9%] 2xl:pl-[12.5%] text-white">
        <h1 className="mb-[8px] text-5xl font-[600]">Partnership</h1>
        <p className="text-lg font-[500] max-w-xl mx-1 md:mx-0">
          Empowering Innovation Through Collaboration – Together, We Drive the
          Future of Tech
        </p>
        <a href="#become-a-partner" className="w-fit flex">
          <button className="px-16 py-4 rounded-md border border-primary-500 bg-primary-500 text-white text-lg hover:-translate-y-1 transform transition duration-200 hover:shadow-md mt-5 font-semibold flex items-center">
            Join Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default Handshake;
