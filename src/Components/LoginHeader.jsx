import React from 'react'

const LoginHeader = () => {
	return (
		<div className="flex flex-row items-center relative">
			<div className="absolute flex items-center left-20">
				<a href="/">
					<img
						src="/images/logo.png"
						alt="Logo"
						width={100}
						height={1000}
						className="cursor-pointer w-20 smd:ml-0 -ml-8"
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
			<h1 className="absolute z-10 smd:text-4xl ml-5 smd:ml-0 text-2xl font-semibold text-white flex text-center left-1/2 transform -translate-x-1/2">
				Welcome Back
			</h1>
		</div>
	)

}

export default LoginHeader