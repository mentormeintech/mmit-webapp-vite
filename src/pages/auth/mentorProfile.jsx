import Header from "../../components/Header";
import Footer from "../../components/footer";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { useNavigate, useParams } from "react-router-dom";
import MentorCard from "../../components/MentorCard";
import MentorScheduleCard from "../../components/MentorScheduleCard";
import Backarrow from "../../assets/backarrow.png";
import { useState, useLayoutEffect } from "react";
import { mentorAccess } from "../../utilities/tokenClient";
import { userGetRequest } from "../../utilities/apiClient";
import Alert from "../../features/Alert";
import Spinner from "../../components/Spinner";
import { motion } from "framer-motion";

const MentorProfile = () => {
	const { mentor_name } = useParams();
	const navigation = useNavigate();
	const [loading, setloading] = useState(false);
	const [card, setCard] = useState(true);
	const [mentorEvents, setmentorEvents] = useState([]);
	const showProfileCard = () => {
		setCard(true);
	};
	const showCalendarCard = () => {
		setCard(false);
	};

	useLayoutEffect(() => {
		getMentorEvent();
	}, []);

	async function getMentorEvent() {
		try {
			const mentor_id = localStorage.getItem(mentorAccess);
			if (!mentor_id) {
				return navigation("/findamentor");
			}
			setloading(true);
			const response = await userGetRequest(
				`event/mentor/events?mentor_id=${mentor_id}`
			);
			if (response && response.success === true) {
				setmentorEvents(response?.data);
				setloading(false);
			} else {
				Alert(response.message, "warning");
				setloading(false);
			}
			setloading(false);
		} catch (error) {
			Alert(error.message, "error");
			setloading(false);
		}
	}

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<div className="w-[100vw] overflow-x-hidden overflow-y-hidden">
					<Header />
					<motion.div
						initial={{ y: -200 }}
						animate={{ y: 0 }}
						transition={{ type: "tween", stiffness: 120 }}
						className="background-dp relative w-[100%]"
					>
						<img
							src="/images/background.png"
							width={2000}
							alt="mentor-dp"
							className="absolute w-[100%]"
							height={50}
						/>
					</motion.div>
					<motion.div
						className="relative"
						initial={{ x: -300 }}
						animate={{ x: 0 }}
						transition={{ type: "spring", stiffness: 80 }}
					>
						<img
							className="relative left-24 top-36 h-[200px] w-[200px] rounded-full"
							src="/images/profileImage1.png"
							width={2000}
							alt="profilephoto"
							height={50}
						/>
						<div
							className="bg-grey relative left-80 top-11 mt-2"
						>
							<h1 className="text-4xl font-semibold capitalize mb-2">
								{mentor_name || "NIL"}
							</h1>
							<p className="texl-xl">
								Product Designer at PDI ltd.
							</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ x: -100, y: 130 }}
						animate={{ x: 0, y: 0 }}
						transition={{
							type: "tween",
							duration: 1,
							ease: "easeInOut",
						}}
						className="m-auto mt-44 max-w-screen-xl px-11"
					>
						<div className="flex justify-end">
							{card ? (
								<button
									className="bg-primary-500 hover:bg-opacity-70 w-[200px] text-center py-2 text-white rounded-md font-semibold"
									onClick={showCalendarCard}
								>
									Book a session
								</button>
							) : (
								<img
									src={Backarrow}
									alt="Back Arrow"
									className="w-5 h-5 cursor-pointer"
									onClick={showProfileCard}
								/>
							)}
						</div>
						<h1 className="mb-5 text-4xl font-semibold">
							{card ? "Overview" : "Book a Session"}
						</h1>
						{card ? (
							<MentorCard />
						) : (
							<MentorScheduleCard mentorEvent={mentorEvents} />
						)}
						<motion.div
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ type: "spring", stiffness: 120 }}
							className="mt-8 inline-flex h-10 w-44 items-center justify-start gap-5"
						>
							<div className="h-8 w-8">
								<div className="flex h-8 items-center justify-center rounded-full bg-zinc-300">
									<FaTwitter />
								</div>
							</div>
							<div className="h-8 w-8">
								<div className="flex h-8 items-center justify-center rounded-full bg-zinc-300">
									<GrMail />
								</div>
							</div>
							<div className="h-8 w-8">
								<div className="flex h-8 items-center justify-center rounded-full bg-zinc-300">
									<FaLinkedinIn />
								</div>
							</div>
						</motion.div>
						<div className="mt-11 flex justify-between">
							<div>
								<h1 className="whitespace-nowrap text-4xl font-semibold text-black">
									Community Statistics
								</h1>
								<p className="text-xl font-medium text-neutral-700">
									Top areas of impact
								</p>
								<p className="text-base font-normal text-neutral-700">
									Topics to be discussed during session
								</p>
							</div>
							<div className="topics flex  flex-row items-end gap-6 whitespace-nowrap text-sm">
								<div className="w-30 border-grey flex h-11 items-center justify-center rounded border px-4">
									General mentorship
								</div>
								<div className="w-30 border-grey flex h-11 items-center justify-center rounded border px-4">
									Design career path
								</div>
								<div className="w-30 border-grey flex h-11 items-center justify-center rounded border px-4">
									UX meaning
								</div>
								<div className="w-30 border-grey flex h-11 items-center justify-center rounded border px-4">
									Interaction design
								</div>
							</div>
						</div>
					</motion.div>
					<div className="mt-20">
						<Footer />
					</div>
				</div>
			)}
		</>
	);
};

export default MentorProfile;
