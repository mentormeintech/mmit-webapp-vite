"use client";

import Header from "./../components/Header";
import Footer from "../components/footer";
import { MetaTags } from "./../features/MetaTags";


import {
  HeroSection,
  AboutSection,
  VisionMissionSection,
  FeaturesSection,
  SponsorsSection,
  FAQSection,
  NewsletterSection,
} from "@/features/landingPage";

const Home = () => {
  return (
    <>
      <MetaTags title="Home &mdash; MentorMeInTech" desc="MMIT Landing page" />
      <Header />

      <HeroSection />

      <AboutSection />

      <VisionMissionSection />

      <FeaturesSection />

      <SponsorsSection />

      <FAQSection />

      <NewsletterSection />

      <Footer />
    </>
  );
};

export default Home;
