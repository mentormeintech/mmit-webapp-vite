import SignupHeader from "../../components/signupheader";
import SignupForm from "../../components/signupform";
import Footer from "../../components/footer";
import { motion } from "framer-motion";

const MenteeSignup = () => {
	return (
		<>
			<div className="w-full flex flex-col">
				<SignupHeader />
				<div className="mt-[5rem] w-11/12 overflow-x-hidden items-center sm:items-start flex flex-col sm:flex-row self-center justify-between lg:justify-center">
					<motion.div
						initial={{ x: -300 }}
						animate={{ x: 0 }}
						transition={{ type: "spring", stiffness: 80 }}
					>
						<div className="lg:ml-[5.5rem]">
							<div className="relative flex flex-col justify-between">
								<h1 className="lg:w-[33rem] smd:w-[460px] sm:w-[min-content]  md:w-[25rem] text-3xl md:text-4xl font-semibold text-black">
									{"Mentor"}{" "}
									<span className="text-orange-400">&</span>{" "}
									Experienced Professionals
								</h1>
								<img
									className="mt-8 w-1/2"
									src="/images/login.png"
									width={1000}
									height={50}
									alt="Login"
								/>
							</div>
						</div>
					</motion.div>
					<SignupForm user_type="mentor" />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default MenteeSignup;
