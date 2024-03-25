import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SignupHeader() {
	return (
		<motion.div
			initial={{ y: -200 }}
			animate={{ y: 0 }}
			transition={{ type: "tween", stiffness: 120 }}
		>
			<div
				className="relative flex flex-row items-center"
			>
				<div className="absolute flex items-center left-20">
					<Link to="/">
						<img
							src="/images/logo.png"
							alt="Logo"
							width={90}
							height={10}
							className="cursor-pointer w-20 -ml-10 smd:ml-0"
						/>
					</Link>
				</div>
				<img
					src="/images/background.png"
					alt="Background"
					width={2000}
					height={50}
					className="h-40"
				/>
				<h1 className="absolute z-10 smd:text-4xl smd:pl-0 pl-6 text-2xl font-semibold text-white ml-6 flex text-center left-1/2 transform -translate-x-1/2">
					Join Us
				</h1>
			</div>
		</motion.div>
	);
}
