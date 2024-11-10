import React, { useState } from "react";
import MentorSchedule from "../../components/schedule";
import MentorLayout from "../../components/MentorLayout";

export default function MentorCalender() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	return (
		<MentorLayout
			// mentorData={dashboard}
			setIsMobileMenuOpen={setIsMobileMenuOpen}
			isMobileMenuOpen={isMobileMenuOpen}
		>
			<section className=" pb-8 px-0 pr-5 lg:pr-0 lg:px-5">
				<MentorSchedule />
			</section>
		</MentorLayout>
	);
}
