
export default function ForgotPasswordHeader () {
	return (
		<div className="relative flex flex-row items-center">
		{/* <div data-aos="fade-down" className="relative flex flex-row items-center"> */}
			<div className="absolute left-20 flex items-center">
				<a href="/">
					<img
						src="/images/logo.png"
						alt="Logo"
						width={100}
						height={1000}
						className="-ml-8 w-20 cursor-pointer smd:ml-0"
					/>
				</a>
			</div>
			<img
				src="/images/background.png"
				alt="Background"
				width={2000}
				height={5}
				className="h-40"
			/>
			<h1 className=":text-2xl absolute left-1/2 z-10 ml-5 flex -translate-x-1/2 transform text-center text-2xl font-semibold text-white smd:ml-0 smd:text-3xl">
			Forgot Password
			</h1>
		</div>
	)

}