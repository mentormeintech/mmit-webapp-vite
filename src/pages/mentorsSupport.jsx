import MentorSide from "../components/MentorSide";
import { CurrentMentor } from "../components/CurrentMentor";
import React, { useState } from "react";
import Header_Signin from "../components/Header_Signin";
import { Link } from "react-router-dom";
import MentorLayout from "../components/MentorLayout";

function MentorsSupport() {
	const Mentor = CurrentMentor;
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const supportLinks = [
		{ text: "Help center", url: "" },
		{ text: "Contact us", url: "/contactus" },
		{ text: "Privacy Policy", url: "/privacy-policy" },
		{ text: "FAQ", url: "" },
	];
	return (
		<MentorLayout
			// mentorData={dashboard}
			setIsMobileMenuOpen={setIsMobileMenuOpen}
			isMobileMenuOpen={isMobileMenuOpen}
		>
			<section className="">
				<h4 className="text-[#454545] text-xl font-semibold mb-8">
					Support
				</h4>

				<div className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center sm:justify-normal">
					{supportLinks.map((link, index) => {
						return (
							<Link
								key={index}
								to={link.url}
								target="_blank"
								className="text-[#454545] flex items-center justify-center text-sm md:text-base w-32 md:w-36 lg:w-44 h-24 md:h-28 border rounded"
							>
								{link.text}
							</Link>
						);
					})}
				</div>
			</section>
		</MentorLayout>
	);
}

export default MentorsSupport;
