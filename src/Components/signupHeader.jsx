import { Link } from "react-router-dom"


export default function SignupHeader() {
	return (
		<div className="flex flex-row items-center relative">
			<div className="absolute flex items-center left-20">
				<Link to="/">
					<img
						src="/images/logo.png"
						alt="Logo"
						width={90}
						height={10}
						className="cursor-pointer w-20 -ml-5 smd:ml-0"
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
			<h1 className="absolute z-10 smd:text-4xl text-2xl font-semibold text-white ml-6 flex text-center left-1/2 transform -translate-x-1/2">
				Join Us
			</h1>
		</div>
	)
}
