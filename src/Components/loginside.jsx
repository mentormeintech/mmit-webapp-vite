import React from 'react'
export default function LoginSide() {

	return (
		<div className="mdl:block pl-24 mt-24 hidden">
			<div className="flex flex-col justify-between relative -top-40">
			<h1 className="text-black text-5xl font-semibold">
					Experience Professional Mentors
				</h1>
				<img
					className="w-1/2 mt-8"
					src="/images/login.png"
					width={1000}
					height={50}
					alt="Login"/>
			</div>
		</div>
	);
};

