import { FaLinkedinIn } from "react-icons/fa";
import { SocialLink } from "../features/landingPage/HeroSection";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const FooterLink = ({ href, children }) => (
  <Link to={href} className="transition-all hover:text-secondary-500">
    {children}
  </Link>
);

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
      href: "https://instagram.com/mentormeintech5",
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
  return (
    <footer className="flex flex-col gap-10 bg-secondary-200 px-10 py-10 text-sm sm:px-20">
      <div className="container mx-auto flex flex-col gap-6 md:flex-row md:justify-between">
        <div className="">
          <img
            src="/images/footer-logo.png"
            width={1000}
            height={1000}
            alt=""
            className="h-auto w-48"
          />
        </div>

        <div className="grid gap-8">
          <div className="flex flex-wrap gap-6 md:justify-end">
            <SocialMediaLinks />
            <a
              href="/findamentor"
              className="hidden w-fit rounded border border-primary-500 bg-primary-500 px-6 py-2 font-medium text-white transition-all hover:bg-opacity-70 md:block"
            >
              Join Our Community
            </a>
          </div>

          <div className="flex flex-col flex-wrap gap-6 sm:flex-row md:justify-end">
            <FooterLink href="#">Join MMIT</FooterLink>
            <FooterLink href="#faq">FAQ</FooterLink>
            <FooterLink href="#">Help center</FooterLink>
            <FooterLink href="#">Partnerships</FooterLink>
          </div>

          <div className="flex flex-col flex-wrap gap-6 sm:flex-row md:justify-end">
            <FooterLink href="#">Contact us</FooterLink>
            <FooterLink href="#">Privacy policy</FooterLink>
            <FooterLink href="#">Terms of use</FooterLink>
            <FooterLink href="#">Sitemap</FooterLink>
          </div>
        </div>
      </div>

      <p className="text-xs md:text-center">
        © 2023 MentorMeInTech. All rights reserved
      </p>
    </footer>
  );
};

