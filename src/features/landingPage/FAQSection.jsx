import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="faq" className="w-full bg-secondary-200 py-20">
      <div className="container mx-auto grid gap-6 px-8 sm:px-20">
        <div className="grid gap-4">
          <h2 className="text-2xl font-semibold text-secondary-500 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base">
            Quick answers to question you may have. Can&apos;t find what
            you&apos;re looking for? Contact us to{" "}
            <a
              href="https://api.whatsapp.com/send?phone=2347037550531"
              target="blank"
              rel="noreferer"
              className="underline underline-offset-2 hover:no-underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <div className="grid gap-4 text-sm sm:text-base">
          {faqs.map((faq, index) => (
            <div key={index} className="">
              <div
                className="flex cursor-pointer items-center justify-between border-b p-2"
                onClick={() => toggleAnswer(index)}
              >
                <p>{faq.question}</p>
                <span className="text-2xl">+</span>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden border-b bg-white px-4"
                  >
                    <p className="py-4 text-sm">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const faqs = [
  {
    question: "What is MentorMeInTech?",
    answer:
      "MentorMeInTech is a platform that pairs tech hopefuls with industry mentors. We aim to be your reliable tech ally, offering unparalleled support and cultivating a dependable community. Our goal is to establish a community-led platform for free tech mentorship in Africa, with a mission to deliver accessible, high-quality guidance to Africans transitioning into tech.",
  },
  {
    question: "How does MentorMeInTech work?",
    answer:
      "Our platform is currently in development, but you can join the waitlist to be the first to know when we launch. Once you sign up, and set up your profile, based on your area of interest, mentors are recommended for you. You can then book a meeting with a mentor at their available time, and your mentorship journey starts.",
  },
  {
    question: "Where is MentorMeInTech based?",
    answer: "It is fully remote, all mentorship sessions are virtual.",
  },
  {
    question: "How do I become a mentor?",
    answer:
      "We are currently accepting applications for mentors. If you are interested in becoming a mentor, kindly reach out to us and speak to an advisor. We are looking for mentors who are passionate about helping others, have at least 5 years of experience in their field, and are willing to commit to at least 4 hours of mentorship per week.",
  },
  {
    question: "How often and for how long do mentorship sessions occur?",
    answer:
      "Mentorship sessions last for about 30 minutes and you can book as many sessions (on the condition you meet up with all your sessions).",
  },
  {
    question: "Is there a cost associated with joining MentorMeInTech?",
    answer: "Mentorship is absolutely FREE!",
  },
  {
    question:
      "I have no prior knowledge of tech, can I still benefit from MentorMeInTech?",
    answer:
      "Yes, everyone interested in building a career in tech is open to mentorship.",
  },
];
