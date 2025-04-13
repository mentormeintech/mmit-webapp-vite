import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import DefaultInput from "./defaultInput";
import { useState, useRef } from "react";
import Alert from "../features/Alert";
import { patchRequest } from "../utilities/apiClient";

export default function MentorChangePassword(props) {
	const { setloading } = props;
	const inputRef = useRef(null);

	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible((prevState) => !prevState);
	};
	const toggleRepeatPasswordVisibility = () => {
		setIsPasswordVisible1((prevState) => !prevState);
	};

	const schema = yup.object().shape({
		password: yup
			.string()
			.typeError("Password should be a number")
			.min(8, "Password should be at least 8")
			.required("Old password is required")
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/,
				"Must contain at least one uppercase, one lowercase, and one number"
			),
		// tools: yup.string().required('Tools is required'),
		repeat_password: yup
			.string()
			.min(8, "New password should be at least 8")
			.required("Old password is required")
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
				"Must contain at least one uppercase, one lowercase, one number, and one special character"
			)
			.notOneOf(
				[yup.ref("password")],
				"New password should not be the same as the old password"
			),
	});

	// code for special character
	// .matches(
	//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
	//     'Must contain at least one uppercase, one lowercase, one number, and one special character'
	//   )

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			password: "",
			repeat_password: "",
		},
		resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		try {
			setloading(true);
			setIsPasswordVisible(false);
			setIsPasswordVisible1(false);
			const response = await patchRequest("mentor/password", data);
			if (response && response?.status === 200) {
				setloading(false);
				Alert(response?.message, "success");
				return (window.location.href = "/auth/signin");
			}
			if (
				response &&
				(response?.status >= 300 || response?.status < 500)
			) {
				setloading(false);
				return Alert(response?.message, "error");
			}
			if (response && response?.status !== 200) {
				setloading(false);
				return Alert(response?.message, "warning");
			}
		} catch (error) {
			setloading(false);
			return Alert(error?.message, "warning");
		}
	}

	return (
		<form className="" onSubmit={handleSubmit(onSubmit)}>
			<section className="md:w-[70%]">
				<div className="w-[100%] lg:w-[80%] mb-8">
					<div className="flex items-center justify-between">
						<p>Old Password</p>
						{/* <label htmlFor="password" className="text-[#0F88D9]">Update</label> */}
					</div>
					<div className="relative">
						{/* <input type="password" readOnly={true} id="password" className="w-full border outline-none h-10 rounded-md" /> */}
						<DefaultInput
							ref={inputRef}
							type={isPasswordVisible ? "text" : "password"}
							id="password"
							placeholder="Old Password"
							{...register("password", {
								required: "Password is required",
							})}
						/>

						<span
							className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer"
							onClick={togglePasswordVisibility}
						>
							<i
								className={
									!isPasswordVisible
										? "fa-solid fa-eye"
										: "fa-solid fa-eye-slash"
								}
							></i>
						</span>
					</div>
					{errors.password && (
						<span className="mt-1 text-xs text-red-500">
							{errors?.password?.message} {"\n \n"}
						</span>
					)}
				</div>

				<div className="w-[100%] lg:w-[80%] mb-8">
					<div className="flex items-center justify-between">
						<p>New Password</p>
					</div>
					<div className="relative">
						<DefaultInput
							ref={inputRef}
							type={isPasswordVisible1 ? "text" : "password"}
							id="repeat_password"
							placeholder="New Password"
							{...register("repeat_password", {
								required: "Password is required",
							})}
						/>
						<span
							className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer"
							onClick={toggleRepeatPasswordVisibility}
						>
							<i
								className={
									!isPasswordVisible1
										? "fa-solid fa-eye"
										: "fa-solid fa-eye-slash"
								}
							></i>
						</span>
					</div>
					{errors.repeat_password && (
						<span className="mt-1 text-xs text-red-500">
							{errors?.repeat_password?.message} {"\n \n"}
						</span>
					)}
				</div>
			</section>
			<div className="md:w-[70%]">
				<button
					className="bg-[#FE9B7E] rounded-md w-[100%] lg:w-[80%] h-11 text-white"
					type="submit"
				>
					Save
				</button>
			</div>
		</form>
	);
}
