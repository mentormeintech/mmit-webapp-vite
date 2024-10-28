import React, { useRef } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SocialLink } from "../features/landingPage/HeroSection";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { motion, useInView } from "framer-motion";

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
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const location = useLocation();
	const currentRoute = location.pathname;
	return (
		<motion.div
			style={{
				transform: isInView ? "none" : "translateY(200px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}}
			ref={ref}
		>
			<footer className="flex flex-col gap-10 bg-secondary-200 px-10 pb-[1rem] py-10 text-sm sm:px-20">
				<div className="container mx-auto flex flex-col gap-6 md:flex-row md:justify-between">
					<div className="sm:w-[43%] mx-auto">
						<img
							src="/images/footer-logo.png"
							width={1000}
							height={1000}
							alt=""
							className="h-auto w-48 mb-[1.2rem]"
						/>
						<span className="w-[40%] leading-6">
							MentorMeInTech is a Non-profit startup aimed to help African youths break
							into tech and build successful careers through mentorship, guidance and on
							going support provided by our inclusive community.
						</span>
					</div>

					<div className="grid gap-8">
						<div className="flex flex-wrap gap-6 md:justify-end">
							<SocialMediaLinks />
							<a
								href="/findamentor"
								className="hidden w-fit rounded border border-primary-500 bg-primary-500 px-6 py-2 font-medium text-white transition-all hover:bg-opacity-70 md:flex items-center"
							>
								Join Our Community
							</a>
						</div>

						<div className="flex flex-col flex-wrap gap-6 sm:flex-row md:justify-end">
							<FooterLink href="#" currentRoute={currentRoute}>
								Join MMIT
							</FooterLink>
							<FooterLink href="#faq" currentRoute={currentRoute}>
								FAQ
							</FooterLink>
							<FooterLink href="#" currentRoute={currentRoute}>
								Help center
							</FooterLink>
							<FooterLink href="/partnership">
								Partnerships
							</FooterLink>
						</div>

						<div className="flex flex-col flex-wrap gap-6 sm:flex-row md:justify-end">
							<FooterLink href="/contactus" currentRoute={currentRoute}>
								Contact us
							</FooterLink>
							<FooterLink
								href="/privacy-policy"
								currentRoute={currentRoute}
							>
								Privacy policy
							</FooterLink>
							<FooterLink
								href="/terms-use"
								currentRoute={currentRoute}
							>
								Terms of use
							</FooterLink>
							<FooterLink href="/sitemap" currentRoute={currentRoute}>
								Sitemap
							</FooterLink>
						</div>
					</div>
				</div>

				<p className="text-xs md:text-center mt-[5rem]">
					© {new Date().getFullYear()} MentorMeInTech. All rights
					reserved
				</p>
			</footer>
		</motion.div>
	);
}
