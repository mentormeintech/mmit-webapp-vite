import React from "react";
import Header_Signin from "../../components/Header_Signin";

const MenteeNotification = () => {
	return (
		<div>
			<Header_Signin />
				<div className="flex justify-center my-[5rem]">
					<div className="flex flex-col w-[90%] sm:w-[600px] mt-20 pt-4 px-8 items-center rounded-3xl border-gray-300 shadow-lg border">
						<div className="flex flex-col gap-5">
							<div>
								Sheldon Cooper has approved your session request for 30th April, 2024.
							</div>
							<div className="w-[90%] mb-5 mx-auto border border-gray-200"></div>
						</div>
						<div className="flex flex-col gap-5">
							<div>
								Sheldon Cooper has approved your session request for 30th April, 2024.
							</div>
							<div className="w-[90%] mb-5 mx-auto border border-gray-200"></div>
						</div>
					</div>
				</div>
		</div>
	);
};

export default MenteeNotification;
