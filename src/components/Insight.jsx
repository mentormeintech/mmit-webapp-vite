import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, TrendingUp } from "lucide-react";
import industryImg from "../assets/industryImg.jpg";
import mentorshipImg from "../assets/mentorshipImg.jpg";
import insightImg from "../assets/insightImg.jpg";
import trendsImg from "../assets/trendsImg.jpg";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Insights = () => {
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <motion.div
        className="relative h-[20rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem]"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <img
          src={insightImg}
          alt="Insights"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full px-6 sm:px-12 text-center text-white">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            variants={slideUp}
          >
            Insights
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed"
            variants={slideUp}
            transition={{ delay: 0.2 }}
          >
            Explore key challenges, opportunities, and trends shaping the tech
            industry. Empower yourself with valuable knowledge to navigate your
            tech journey.
          </motion.p>
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="mt-12 space-y-16 px-4 lg:px-16">
        {/* Industry Challenges and Solutions */}
        <motion.div
          className="flex flex-col lg:flex-row gap-8 items-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={industryImg}
            alt="Industry Challenges"
            className="w-full lg:w-1/2 rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {/* <Lightbulb className="inline-block text-yellow-500 w-6 h-6 mr-2" /> */}
              Industry Challenges and Solutions
            </h2>
            <ul className="list-none space-y-4 text-gray-700">
              <li className="flex items-start">
                <Lightbulb className="text-yellow-500 w-5 h-5 mr-3" />
                Addressing the barriers Africans face when transitioning into
                tech.
              </li>
              <li className="flex items-start">
                <Lightbulb className="text-yellow-500 w-5 h-5 mr-3" />
                How mentorship can close the skills gap in the tech industry.
              </li>
              <li className="flex items-start">
                <Lightbulb className="text-yellow-500 w-5 h-5 mr-3" />
                Strategies for overcoming self-doubt and impostor syndrome.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* The Role of Mentorship */}
        <motion.div
          className="flex flex-col lg:flex-row-reverse gap-8 items-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={mentorshipImg}
            alt="Role of Mentorship"
            className="w-full lg:w-1/2 rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {/* <Users className="inline-block text-blue-500 w-6 h-6 mr-2" /> */}
              The Role of Mentorship
            </h2>
            <ul className="list-none space-y-4 text-gray-700">
              <li className="flex items-start">
                <Users className="text-blue-500 w-5 h-5 mr-3" />
                Why mentorship is essential for career growth in tech.
              </li>
              <li className="flex items-start">
                <Users className="text-blue-500 w-5 h-5 mr-3" />
                Tips for choosing and building a strong mentor-mentee
                relationship.
              </li>
              <li className="flex items-start">
                <Users className="text-blue-500 w-5 h-5 mr-3" />
                Success stories: How mentorship has transformed tech journeys.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Tech Trends and Career Opportunities */}
        <motion.div
          className="flex flex-col lg:flex-row gap-8 items-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={trendsImg}
            alt="Tech Trends"
            className="w-full lg:w-1/2 rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {/* <TrendingUp className="inline-block text-green-500 w-6 h-6 mr-2" /> */}
              Tech Trends and Career Opportunities
            </h2>
            <ul className="list-none space-y-4 text-gray-700">
              <li className="flex items-start">
                <TrendingUp className="text-green-500 w-5 h-5 mr-3" />
                Emerging trends shaping the African tech industry.
              </li>
              <li className="flex items-start">
                <TrendingUp className="text-green-500 w-5 h-5 mr-3" />
                Preparing for the future of work in a remote-first world.
              </li>
              <li className="flex items-start">
                <TrendingUp className="text-green-500 w-5 h-5 mr-3" />
                Skills and tools every aspiring tech professional should master.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Insights;
