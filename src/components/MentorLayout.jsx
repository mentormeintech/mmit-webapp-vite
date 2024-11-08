import React from "react";
import MentorSide from "../components/MentorSide";
import Header_Signin from "../components/Header_Signin";

const MentorLayout = ({ children, mentorData, setIsMobileMenuOpen, isMobileMenuOpen }) => {
	return (
		<>
			<Header_Signin />
			<div className="flex mt-16 md:mt-[130px] lg:mt-36 relative">
				<MentorSide
					Mentor={mentorData}
					setIsMobileMenuOpen={setIsMobileMenuOpen}
					isMobileMenuOpen={isMobileMenuOpen}
				/>
				<main className="flex-1 transition-transform duration-300 ease-in-out ml-0 mt-10 lg:ml-[16%] p-10">
					{children}
				</main>
			</div>
		</>
	);
};

export default MentorLayout;
