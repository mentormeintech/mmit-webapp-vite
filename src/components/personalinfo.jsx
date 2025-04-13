import { useState } from "react";
import Alert from "../features/Alert";

export default function Personalinfo(props) {
	const { dashboard, onSubmit } = props;

	const [formData, setFormData] = useState({
		first_name: `${dashboard?.first_name}`,
		last_name: `${dashboard?.last_name}`,
		country: dashboard?.country || "",
		gender: dashboard?.gender || "",
		mobile: dashboard?.mobile || "",
		about_me: dashboard?.about_me || "",
	});

	const handleChange = (event) => {
		try {
			const { name, value } = event.target;
			setFormData({ ...formData, [name]: value });
			console.log("value", value);
		} catch (error) {
			Alert(error.message, "error");
		}
	};

	async function submitForm(event) {
		event.preventDefault();
		onSubmit(formData);
	}

	return (
		<form className="w-full">
			{/* Personal Information Section */}
			<section className="md:w-[70%]">
				{/* Full Name Field */}
				<div className="w-[100%] lg:w-[80%] mb-8">
					<div className="flex justify-between items-center mb-3">
						<p className="text-sm lg:text-base">Full Name</p>
					</div>
					<input
						type="text"
						id="full-name"
						placeholder="John Doe"
						className="bg-transparent w-full outline-none border-b-[0.02px] border-[#434343] pb-2 text-sm lg:text-base"
						editable="false"
						name="first_name"
						onChange={handleChange}
						value={`${formData?.first_name}`}
					/>
				</div>
				<div className="w-[100%] lg:w-[80%] mb-8">
					<div className="flex justify-between items-center mb-3">
						<p className="text-sm lg:text-base">Full Name</p>
					</div>
					<input
						type="text"
						id="full-name"
						placeholder="John Doe"
						className="bg-transparent w-full outline-none border-b-[0.02px] border-[#434343] pb-2 text-sm lg:text-base"
						name="last_name"
						editable="false"
						onChange={handleChange}
						value={`${formData?.last_name}`}
					/>
				</div>
				{/* Gender Field */}
				<div className="w-[100%] lg:w-[80%] mb-8">
					<label className="block mb-3 text-sm lg:text-base">
						Gender
					</label>
					<select
						className="bg-transparent outline-none w-full border-b-[0.02px] border-b-[#434343] box-shadow-none px-2 mb-5"
						name="gender"
						value={formData.gender}
						onChange={handleChange}
					>
						<option value="female">Female</option>
						<option value="male">Male</option>
					</select>
				</div>

				{/* Country Field */}
				<div className="w-[100%] lg:w-[80%] mb-8">
					<label className="block mb-3 text-sm lg:text-base">
						Country
					</label>
					<input
						type="text"
						id="country"
						placeholder="NG NIGERIA"
						className="outline-none border-b-[0.02px] border-[#434343] pb-2 w-full text-sm lg:text-base"
						name="country"
						onChange={handleChange}
						value={formData?.country}
					/>
				</div>

				{/* Phone Number Field */}
				<div className="w-[100%] lg:w-[80%] mb-8">
					<div className="flex justify-between items-center mb-3">
						<p className="text-sm lg:text-base">Phone Number</p>
					</div>
					<input
						type="text"
						id="phone-number"
						placeholder="N/A"
						className="outline-none border-b-[0.02px] w-full border-[#434343] pb-2 text-sm lg:text-base"
						name="mobile"
						onChange={handleChange}
						value={formData.mobile}
					/>
				</div>
			</section>

			{/* About Section */}
			<div className="md:w-[70%] mb-8">
				<div className="flex justify-between items-center mb-3">
					<p className="text-sm lg:text-base">About</p>
				</div>
				<textarea
					id="about"
					className="bg-transparent outline-none h-40 lg:h-56 bg-[#FDF8F8] resize-none w-[100%] lg:w-[80%] py-2 px-4 text-sm lg:text-base border border-black border-[.5px]"
					name="about_me"
					onChange={handleChange}
					value={formData.about_me}
				></textarea>
			</div>

			{/* Save Button */}
			<div className="md:w-[70%]">
				<button
					className="bg-[#FE9B7E] rounded-md w-[100%] lg:w-[80%] h-11 text-white text-sm lg:text-base hover:bg-[#FF8A6A] transition-colors duration-300"
					onClick={submitForm}
				>
					Save
				</button>
			</div>
		</form>
	);
}
