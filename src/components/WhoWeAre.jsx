const Whoweare = () => {
  return (
    <div className="relative pb-10 pt-10 h-[20rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem]">
      {/* Background Image */}
      <img
        width={1000}
        height={50}
        alt="Who we are"
        className="w-full h-full object-cover"
        src="images/we.jpg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full px-6 sm:px-12 text-white text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Who We Are
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
          At MentorMeInTech, we are passionate about supporting African tech
          enthusiasts on their journey into the technology industry. Our
          platform connects aspiring tech professionals with experienced
          mentors who guide, inspire, and empower them to achieve their goals.
          We are building a community where mentorship is accessible, impactful,
          and personalized to meet individual needs.
        </p>
      </div>
    </div>
  );
};

export default Whoweare;
