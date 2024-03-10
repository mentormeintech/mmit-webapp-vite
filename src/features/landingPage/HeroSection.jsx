import { cloneElement, useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const HeroSection = () => {
	const { token, type } = useSelector((state) => state.mentor_me_user);
	const [text] = useTypewriter({
		words: ["Empowering"],
		loop: {},
		typeSpeed: 200,
		deleteSpeed: 100,
	});

	return (
		<section
			id="hero-section"
			className="relative mt-16 w-full bg-hero-bg bg-cover bg-center bg-no-repeat"
		>
			<div className="absolute left-0 top-0 z-0 h-full w-full bg-black/70"></div>

			<div className="container relative z-10 grid gap-8 px-4 pb-10 pt-16 text-white sm:px-12 sm:pt-24 xl:mx-auto">
				<h1
					className="max-w-3xl text-4xl font-semibold !leading-tight sm:text-5xl"
					data-aos="fade-right"
				>
					Dedicated to{" "}
					<span className="text-primary-500">
						{text}
						<Cursor />
					</span>
					<br />
					Individuals Through Technology and Mentorship
				</h1>

				<p
					className="max-w-md"
					data-aos="fade-right"
					data-aos-delay="200"
				>
					Welcome to mentormeintech, where we unlock limitless
					opportunities in the world of technology! We&apos;re excited
					to have you as a part of our vibrant community of tech
					enthusiasts.
				</p>

				<div
					className="flex flex-wrap gap-4 font-medium"
					data-aos="fade-right"
					data-aos-delay="400"
				>
					{/* <Link
            href="/findamentor"
            className="w-fit rounded border border-primary-500 bg-primary-500 px-6 py-2 font-medium text-white transition-all hover:bg-opacity-70"
          >
            Find a Mentor
          </Link> */}

					{/* {  <Link
            href="/auth/signin"
          <Link
            href="/mentorregist"
            className="w-fit rounded border border-primary-500 px-6 py-2 font-medium transition-all hover:bg-white/10"
          >
            Become a Mentor
          </Link>} */}
					{type !== "mentor" && (
						<Link
							to="/auth/mentorsignup"
							className="w-fit rounded border border-primary-500 px-6 py-2 font-medium transition-all hover:bg-white/10"
						>
							Become a Mentor
						</Link>
					)}
				</div>

				<div
					className="flex gap-4 py-4 text-lg"
					data-aos="fade-right"
					data-aos-delay="800"
				>
					<SocialLink
						href="https://linkedin.com/company/mentormeintech"
						iconColor="text-blue-500"
					>
						<FaLinkedinIn />
					</SocialLink>

					<SocialLink
						href="https://x.com/mentormeintech"
						iconColor="text-black"
					>
						<RiTwitterXFill />
					</SocialLink>
					<SocialLink
						href="https://instagram.com/mentormeintech5"
						iconColor="text-red-500"
					>
						<RiInstagramFill />
					</SocialLink>
				</div>

				<p
					className="text-right text-sm text-primary-500"
					data-aos="fade-down"
				>
					MMIT, Your tech odyssey starts here!
				</p>
			</div>
		</section>
	);
};

export const SocialLink = ({ href, children, iconColor }) => (
	<Link
		to={href}
		target="blank"
		className="flex items-center justify-center rounded-full bg-white p-2 transition-all hover:scale-125"
	>
		{cloneElement(children, { className: iconColor })}
	</Link>
);
