import { MobileSidebar } from "../features/MobileSidebar";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../redux/slices/userslice";
import { logUserOut } from "../utilities/apiClient";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
	const { token, type, dashboard } = useSelector(
		(state) => state.mentor_me_user
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const logOut = () => {
		logUserOut();
		dispatch(logOutUser({ token: "", user: {}, dashboard: {} }));
		return navigate("/mentorregist");
	};

	const goToProfile = () => {
		navigate(`/${type}`);
	};

	const links = [
		{ href: "/findamentor", text: "Find a mentor" },
		// type === "mentee" && token !== "" ? { href: "/bookasession", text: "Book a session" } : { href: "", text: "" }, //this link should be moved to mentee's profile
		{ href: "/partnership", text: "Partnership" },
		{ href: "#", text: "About Us" },
		{ href: "#", text: "Insights" },
		type === "mentor" && token === ""
			? { href: "/auth/mentorsignup", text: "Become A Mentor" }
			: type === "mentor" && token !== ""
				? { href: "", text: "" }
				: { href: "/auth/mentorsignup", text: "Become A Mentor" },
	];

	const nameIcon = `${dashboard?.first_name?.charAt(
		0
	)}${dashboard?.last_name?.charAt(0)}`;

	return (
		<div className="fixed top-0 left-0 w-full z-50 bg-[#EDE6E7]">
			<motion.div
				initial={{ y: -200 }}
				animate={{ y: 0 }}
				transition={{ type: "tween", stiffness: 120 }}
			>
				<div className="mx-auto font-medium lg:container">
					<div className="flex flex-row items-center justify-between px-8 py-4 lg:px-12">
						<Link to="/">
							<img
								width={100}
								height={100}
								alt="MMIT Logo"
								className="h-auto w-24"
								src="/images/mmit-logo.png"
								priority={true}
							/>
						</Link>

						<div className="lg:hidden">
							<MobileSidebar links={links} />
						</div>

						<div className="hidden flex-row items-center justify-center font-semibold lg:flex">
							<div className="flex-row items-start justify-between gap-7">
								<ul className="flex flex-row justify-between gap-8 text-sm font-semibold">
									{links.map((link, index) => (
										link.href !== '' && <li key={index}>
											<Link
												to={link?.href}
												className={`transition-all ${link.href === "#"
													? "cursor-not-allowed opacity-50"
													: "hover:text-sky-600"
													} ${location.pathname ===
														link?.href
														? "text-sky-600"
														: "hover:text-sky-600"
													}`}
											>
												{link.text}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						{token !== "" ? (
							<div className="hidden flex-row gap-4 text-sm font-medium lg:flex"></div>
						) : (
							<div className="hidden flex-row gap-4 text-sm font-medium lg:flex">
								<Link to="/auth/menteesignup">
									<button className="rounded border border-primary-500 bg-primary-500 px-4 py-2  text-white transition-all hover:bg-opacity-70">
										Sign up
									</button>
								</Link>

								<Link to="/auth/signin">
									<button className="rounded border border-primary-500 px-4 py-2 transition-all hover:bg-black/10">
										Log in
									</button>
								</Link>
							</div>
						)}
						{type &&
							type !== "" &&
							dashboard?.first_name &&
							dashboard?.last_name && (
								<div
									className="flex items-center justify-center cursor-pointer rounded-full w-[2.5rem] h-[2.5rem] border border-primary-500 transition-all hover:bg-black/10"
									style={{
										marginLeft: "-6rem",
									}}
									onClick={() => goToProfile()}
								>
									<h3 className="font-bold">{nameIcon}</h3>
								</div>
							)}
					</div>
				</div>
			</motion.div>
		</div>
	);
}
