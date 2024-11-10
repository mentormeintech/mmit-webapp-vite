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
			<section className=" pb-8 px-0 pr-5 lg:pr-0 lg:px-5">
				<h4 className="text-[#454545] text-xl font-semibold mb-12">
					Support
				</h4>

				<div className="w-9/12 flex justify-between items-center">
					{supportLinks.map((link, index) => {
						return (
							<Link
								key={index}
								to={link.url}
								target="_blank"
								className="text-[#454545] flex items-center justify-center w-[23%] h-28 border rounded"
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
