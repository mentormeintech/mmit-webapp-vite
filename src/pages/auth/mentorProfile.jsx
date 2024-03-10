import Header from "../../components/Header";
import Footer from "../../components/footer";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { useParams } from "react-router-dom";
import MentorCard from "../../components/MentorCard";
import MentorCalendarCard from "../../components/MentorCalendarCard";
import Backarrow from "../../assets/backarrow.png";
import { useState } from "react";

const MentorProfile = () => {
	const { mentor_name } = useParams();
	const [card, setCard] = useState(true);
	// console.log("mentor_name", mentor_name);
	const showProfileCard = () => {
		setCard(true);
	};
	const showCalendarCard = () => {
		setCard(false);
	};

	return (
		<div className="w-[98.9vw] overflow-x-hidden">
			<Header />
			<div
				data-aos="fade-down"
				className="background-dp relative w-[100%]"
			>
				<img
					data-aos="fade-down"
					src="/images/background.png"
					width={2000}
					alt="mentor-dp"
					className="absolute w-[100%]"
					height={50}
				/>
			</div>
			<div className="relative" data-aos="fade-right">
				<img
					className="relative left-24 top-36 h-[200px] w-[200px] rounded-full"
					src="/images/profileImage1.png"
					width={2000}
					alt="profilephoto"
					height={50}
				/>
				<div
					data-aos="fade-right"
					className="bg-grey relative left-80 top-11 mt-2
        "
				>
					<h1 className="text-4xl font-semibold capitalize mb-2">
						{mentor_name || "NIL"}
					</h1>
					<p className="texl-xl">Product Designer at PDI ltd.</p>
				</div>
			</div>

			<div
				data-aos="fade-up-right"
				data-aos-easing="linear"
				data-aos-duration="900"
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
				<h1 className="mb-5 text-4xl font-semibold">Overview</h1>
				{card ? <MentorCard /> : <MentorCalendarCard />}
				<div
					data-aos="zoom-in"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
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
				</div>
				<div
					ata-aos="zoom-in"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
					className="mt-11 flex justify-between"
				>
					<div
						ata-aos="zoom-in"
						data-aos-offset="300"
						data-aos-easing="ease-in-sine"
					>
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
			</div>
			<div className="mt-20">
				<Footer />
			</div>
		</div>
	);
};

export default MentorProfile;
