import React from "react";

const Notifications = () => {
	return (
		<div className="flex justify-center">
			<div className="flex flex-col w-[90%] sm:w-[600px] mt-20 p-4 px-8 items-center rounded-3xl border-gray-300 shadow-lg border">
				<div className="flex flex-col gap-3">
					<div>
						Alex Dunphy would like to schedule a session for April
						30th, 2024, from 10:00 am to 10:30 am.
					</div>
					<div className="flex gap-4 w-full justify-end">
						<button className="text-white font-semibold bg-green-700 hover:bg-green-600 p-2 rounded-xl shadow-md">Accept</button>
						<button className="text-white font-semibold bg-red-700 hover:bg-red-600 p-2 rounded-xl shadow-md">Reject</button>
					</div>
					<div className="w-[90%] my-3 mx-auto border border-gray-200"></div>
				</div>
				<div className="flex flex-col gap-3">
					<div>
						Alex Dunphy would like to schedule a session for April
						30th, 2024, from 10:00 am to 10:30 am.
					</div>
					<div className="flex gap-4 w-full justify-end">
						<button className="text-white font-semibold bg-green-700 hover:bg-green-600 p-2 rounded-xl shadow-md">Accept</button>
						<button className="text-white font-semibold bg-red-700 hover:bg-red-600 p-2 rounded-xl shadow-md">Reject</button>
					</div>
					<div className="w-[90%] my-3 mx-auto border border-gray-200"></div>
				</div>
				<div className="flex flex-col gap-3">
					<div>
						Alex Dunphy would like to schedule a session for April
						30th, 2024, from 10:00 am to 10:30 am.
					</div>
					<div className="flex gap-4 w-full justify-end">
						<button className="text-white font-semibold bg-green-700 hover:bg-green-600 p-2 rounded-xl shadow-md">Accept</button>
						<button className="text-white font-semibold bg-red-700 hover:bg-red-600 p-2 rounded-xl shadow-md">Reject</button>
					</div>
					<div className="w-[90%] my-3 mx-auto border border-gray-200"></div>
				</div>
			</div>
		</div>
	);
};

export default Notifications;
