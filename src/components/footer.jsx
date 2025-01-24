import { FaLinkedinIn } from "react-icons/fa";
import { SocialLink } from "../features/landingPage/HeroSection";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const FooterLink = ({ href, children }) => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const linkClasses = classNames(
    "transition-all hover:text-secondary-500 cursor-pointer",
    {
      "text-secondary-500": currentRoute === href,
    }
  );
  return (
    // <Link to={href} className={`transition-all hover:text-secondary-500 cursor-pointer `} target='_blank'>
    // <Link to={href} className={linkClasses} target="_blank">
    <Link to={href} className={linkClasses}>
      {children}
    </Link>
  );
};

const SocialMediaLinks = () => {
  const socialLinks = [
    {
      href: "https://linkedin.com/company/mentormeintech",
      icon: <FaLinkedinIn />,
      color: "text-blue-500",
    },
    {
      href: "https://x.com/mentormeintech",
      icon: <RiTwitterXFill />,
      color: "text-black",
    },
    {
      href: "https://instagram.com/mentormeintech",
      icon: <RiInstagramFill />,
      color: "text-red-500",
    },
  ];

  return (
    <div className="flex gap-4 text-lg">
      {socialLinks.map((link, index) => (
        <SocialLink key={index} href={link.href} iconColor={link.color}>
          {link.icon}
        </SocialLink>
      ))}
    </div>
  );
};

export default function Footer() {
  const location = useLocation();
  const currentRoute = location.pathname;
  const calendarYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-secondary-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a
              href="/"
              className="flex justify-center lg:justify-start"
            >
              <img
                src="/images/footer-logo.png"
                width={1000}
                height={1000}
                alt=""
                className="h-auto w-48 mb-[1.2rem]"
              />
            </a>
            <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
              MentorMeInTech is a Non-profit startup aimed to help African
              youths break into tech and build successful careers through
              mentorship, guidance and on going support provided by our
              inclusive community.
            </p>
            <a
              href="/findamentor"
              className="block w-fit mx-auto rounded border border-primary-500 bg-primary-500 px-6 py-2 font-medium text-white transition-all hover:bg-opacity-70 md:flex lg:mx-0 items-center"
            >
              Join Our Community
            </a>
          </div>

          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Company</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-5">
                <FooterLink href="/contactus" currentRoute={currentRoute}>
                  Contact us
                </FooterLink>
              </li>
              <li className="mb-5">
                <FooterLink href="/privacy-policy" currentRoute={currentRoute}>
                  Privacy policy
                </FooterLink>
              </li>
              <li className="mb-5">
                <FooterLink href="/terms-use" currentRoute={currentRoute}>
                  Terms of use
                </FooterLink>
              </li>
              <li className="mb-5">
                <FooterLink href="/sitemap" currentRoute={currentRoute}>
                  Sitemap
                </FooterLink>
              </li>
            </ul>
          </div>
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Support</h4>
            <ul className="text-sm  transition-all duration-500">
              {/* <li className="mb-5">
                <FooterLink href="#" currentRoute={currentRoute}>
                  Join MMIT
                </FooterLink>
              </li> */}
              <li className="mb-5">
                <FooterLink href="#faq" currentRoute={currentRoute}>
                  FAQ
                </FooterLink>
              </li>
              <li className="mb-5">
                <FooterLink href="#" currentRoute={currentRoute}>
                  Help center
                </FooterLink>
              </li>
              <li className="mb-5">
                <FooterLink href="/partnership" currentRoute={currentRoute}>
                  Partnerships
                </FooterLink>
              </li>
            </ul>
          </div>
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-900 font-medium mb-7">
              Follow Us
            </h4>
            <ul className="text-sm  transition-all duration-500">
              <SocialMediaLinks />
            </ul>
          </div>
        </div>
        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col">
            <span className="text-sm text-gray-500">
              ©<span>MentorMeInTech</span> {calendarYear},
              All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
