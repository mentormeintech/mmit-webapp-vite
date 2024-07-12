import { motion } from "framer-motion";

export default function LoginSide() {
	return (
		<motion.div
			initial={{ x: -300 }}
			animate={{ x: 0 }}
			transition={{ type: "spring", stiffness: 120 }}
		>
			<div className="hidden pl-24 mdl:block">
				<div className="relative flex flex-col justify-between">
					<h1 className="text-3xl font-semibold text-black">
						Experienced Professional Mentors
					</h1>
					<img
						className="mt-8"
						src="/images/login.png"
						width={300}
						height={50}
						alt="Login"
					/>
				</div>
			</div>
		</motion.div>
	);
}
