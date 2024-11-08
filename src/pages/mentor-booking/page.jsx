import MentorSide from "../../components/MentorSide";
import React, { useState, useLayoutEffect } from "react";
import Header_Signin from "../../components/Header_Signin";
import Upcoming from "./upcoming";
import { useSelector } from "react-redux";
import { userGetRequest } from "../../utilities/apiClient";
import { useNavigate } from "react-router-dom";
import Alert from "../../features/Alert";
import Spinner from "../../components/Spinner";
import PendingSession from "./pending-session";
import MentorLayout from "../../components/MentorLayout";

function MentorBooking() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [upcomingSessions, setUpcomingSessions] = useState([]);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [bookingSection, setBookingSection] = useState({
		upcoming: true,
		pending: false,
		doneSessions: false,
	});

	// Retrieve mentor data from Redux
	const { dashboard } = useSelector((state) => state.mentor_me_user);

	// Fetch upcoming sessions if the mentor data is available
	async function getMentorUpcomingSession() {
		try {
			if (!dashboard || !dashboard._id) {
				return navigate("/mentor"); // Redirect if no dashboard data
			}
			setLoading(true);
			const response = await userGetRequest(
				`event/upcoming-session?mentor_id=${dashboard._id}`
			);
			if (response && response.success) {
				setUpcomingSessions(response.data);
			} else {
				Alert(response.message, "warning");
			}
			setLoading(false);
			console.log(dashboard);
		} catch (error) {
			Alert(error.message, "error");
			setLoading(false);
		}
	}

	useLayoutEffect(() => {
		getMentorUpcomingSession();
	}, []);

	function upcomingSection() {
		setBookingSection({
			upcoming: true,
			pending: false,
			doneSessions: false,
		});
	}

	function pendingSection() {
		setBookingSection({
			upcoming: false,
			pending: true,
			doneSessions: false,
		});
	}

	function doneSessionSection() {
		setBookingSection({
			upcoming: false,
			pending: false,
			doneSessions: true,
		});
	}

	function alternateSections() {
		if (bookingSection.upcoming) {
			return <Upcoming upcomingSession={upcomingSessions} />;
		} else if (bookingSection.pending) {
			return <PendingSession upcomingSession={upcomingSessions} />;
		} else if (bookingSection.doneSessions) {
			return <p>You have no done sessions</p>;
		}
	}

	return (
		<>
			{loading ? (
				<Spinner loading={loading} />
			) : (
				<MentorLayout
					mentorData={dashboard}
					setIsMobileMenuOpen={setIsMobileMenuOpen}
					isMobileMenuOpen={isMobileMenuOpen}
				>
					<section className=" pb-8 px-0 pr-5 lg:pr-0 lg:px-5">
						<h4 className="text-[24px] font-semibold mb-3">
							Booking
						</h4>
						<p>
							The session timings are following your local
							timezone Nigeria.
						</p>

						<ul className="flex items-center mt-12 mb-12">
							<li
								className={`relative cursor-pointer group ${
									bookingSection.upcoming
										? "text-[#0F88D9]"
										: ""
								}`}
								onClick={upcomingSection}
							>
								<div
									className={`group-hover:w-full transition-all delay-500 ease-in-out h-[2px] bg-[#0F88D9] ${
										bookingSection.upcoming
											? "w-full"
											: "w-0"
									} absolute left-0 -bottom-[3px]`}
								></div>
								Upcoming
							</li>

							<li
								className={`relative cursor-pointer group mx-16 ${
									bookingSection.pending
										? "text-[#0F88D9]"
										: ""
								}`}
								onClick={pendingSection}
							>
								<div
									className={`group-hover:w-full transition-all delay-500 ease-in-out h-[2px] bg-[#0F88D9] absolute left-0 -bottom-[3px] ${
										bookingSection.pending
											? "w-full"
											: "w-0"
									}`}
								></div>
								Pending
							</li>

							<li
								className={`relative cursor-pointer group ${
									bookingSection.doneSessions
										? "text-[#0F88D9]"
										: ""
								}`}
								onClick={doneSessionSection}
							>
								<div
									className={`group-hover:w-full transition-all delay-500 ease-in-out h-[2px] bg-[#0F88D9] absolute left-0 -bottom-[3px] ${
										bookingSection.doneSessions
											? "w-full"
											: "w-0"
									}`}
								></div>
								Done Sessions
							</li>
						</ul>

						{alternateSections()}
					</section>
				</MentorLayout>
			)}
		</>
	);
}

export default MentorBooking;
