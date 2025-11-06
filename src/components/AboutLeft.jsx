import { CheckCircle, Users, Wrench } from "lucide-react";

const AboutLeft = () => {
  return (
    <section className="pt-6 lg:pt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white px-4 lg:px-10">
      {/* Left Section: Text */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
          Welcome to Mentor Me in Tech
        </h1>
        <h2 className="text-xl font-semibold text-pink-600 mb-4">
          What We Do
        </h2>
        <p className="text-gray-700 text-base leading-7 mb-6">
          We provide free mentorship opportunities through a curated network of seasoned professionals from various tech fields. Whether you’re transitioning into tech or seeking to grow your skills, MentorMeInTech offers:
        </p>
        <ul className="space-y-4 text-gray-700 text-base leading-7">
  <li className="flex items-start">
    <CheckCircle className="w-6 h-6 text-pink-600 flex-shrink-0 mr-3" />
    <div>
      <span className="font-medium text-pink-600">Personalized mentorship:</span>{" "}
      tailored to your unique needs.
    </div>
  </li>
  <li className="flex items-start">
    <Users className="w-6 h-6 text-pink-600 flex-shrink-0 mr-3" />
    <div>
      <span className="font-medium text-pink-600">Access to a vibrant community:</span>{" "}
      of tech professionals.
    </div>
  </li>
  <li className="flex items-start">
    <Wrench className="w-6 h-6 text-pink-600 flex-shrink-0 mr-3" />
    <div>
      <span className="font-medium text-pink-600">Tools and guidance:</span>{" "}
      to help you navigate your tech journey confidently.
    </div>
  </li>
</ul>
      </div>

      {/* Right Section: Image Grid */}
      <div className="grid grid-cols-2 bg-[#fef6f6] gap-4">
        <img
          src="/images/mentors1.jpg"
          alt="team member"
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
        <img
          src="/images/mentors2.jpg"
          alt="team member"
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>

      <div className="grid grid-cols-1 bg-[#fef6f6] gap-4">
        <img
          src="/images/mentors3.jpg"
          alt="team member"
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>

      <div>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Our Mission</h1>
        <p className="text-gray-700 text-base leading-7">
          Our mission is to make exceptional mentorship easily accessible to Africans aspiring to build successful careers in the tech industry.
        </p>
      </div>

      <div>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Our Vision</h1>
        <p className="text-gray-700 text-base leading-7">
          We envision a thriving community-driven platform that empowers Africans transitioning into tech by offering free mentorship and resources that unlock their potential.
        </p>
      </div>

      <div className="grid p-10 mb-10 grid-cols-1 gap-4">
        <img
          src="/images/mentors4.jpg"
          alt="team member"
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>
    </section>
  );
};

export default AboutLeft;
