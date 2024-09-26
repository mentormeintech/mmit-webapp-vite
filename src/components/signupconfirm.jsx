import FindAMentor from "../pages/findamentor";
import { MdEmail } from "react-icons/md";

const Singupconfirm = () => {
	return (
		<div className="flex flex-col my-auto">
			<div className="flex flex-col items-center w-[732px] rounded-md bg-[#F1F9FF] p-8 justify-center mx-auto my-32 ">
				<MdEmail className="h-40 w-52" />
				<p className="text-center text-[20px]">
					Upon receiving an approval or refusal email and completing the
					necessary background check, please bear with us as we review your
					information. It will take approximately 72 hours. After this process,
					you will be granted access to your profile, thereby allowing you to
					begin mentoring.
				</p>
			</div>
			<a href={"/auth/signin"}>
				<button
					type="button"
					className="w-52 h-12 -mt-10 cursor-pointer bg-blue-500 px-5 py-3 rounded shadow items-center mx-auto flex flex-col ">
					<div className=" whitespace-nowrap text-white text-base text-center font-semibold">
						Back to Login
					</div>
				</button>
			</a>
		</div>
	);
};

export default Singupconfirm;
