import React, { useState, useEffect } from "react";
import MentorsSettingsComps from "../../components/MentorsSettingsComps";
import { CurrentMentor } from "../../components/CurrentMentor";
import { useSelector } from "react-redux";
import MentorLayout from "../../components/MentorLayout";
import { getValidToken } from "../../utilities/tokenClient";
import { setToken } from "../../utilities/axiosClient";
import { useNavigate } from "react-router-dom";

const tabs = [
	{ key: "profile", label: "Mentorship Profile" },
	{ key: "personalInfo", label: "Personal Info" },
	{ key: "login", label: "Login and Security" },
	{ key: "notification", label: "Message and Notification" },
];

function MentorSettings() {
	const navigation = useNavigate();
	const [mentorship, setMentorship] = useState({
		profile: true,
		personalInfo: false,
		login: false,
		notification: false,
	});

	useEffect(() => {
		checkAndSetToken()
	}, [])

	function displayProfile() {
		setMentorship({
			profile: true,
			personalInfo: false,
			login: false,
			notification: false,
		});
	}

	function displayPersonalInfo() {
		setMentorship({
			profile: false,
			personalInfo: true,
			login: false,
			notification: false,
		});
	}

	function displayLogin() {
		setMentorship({
			profile: false,
			personalInfo: false,
			login: true,
			notification: false,
		});
	}

	function displayNotification() {
		setMentorship({
			profile: false,
			personalInfo: false,
			login: false,
			notification: true,
		});
	}

	async function checkAndSetToken() {
		const token = await getValidToken();
		if (!token) {
			return navigation("/auth/signin");
		}
		return await setToken(token);
	}

	const { dashboard } = useSelector((state) => state.mentor_me_user);
	const [activeTab, setActiveTab] = useState("profile");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<MentorLayout
			mentorData={dashboard}
			setIsMobileMenuOpen={setIsMobileMenuOpen}
			isMobileMenuOpen={isMobileMenuOpen}
		>
			<section className="pb-8 px-5">
				<h4 className="text-[#454545] text-xl font-semibold mb-8">Settings</h4>

				{/* Tabs */}
				<ul className="flex flex-wrap gap-4 md:gap-8 lg:gap-12 mb-8 text-sm md:text-base lg:text-lg">
					{tabs.map(({ key, label }) => (
						<li
							key={key}
							className={`relative cursor-pointer group ${activeTab === key ? "text-[#0F88D9]" : "text-gray-600"
								}`}
							onClick={() => setActiveTab(key)}
						>
							<span className="hover:text-[#0F88D9]">{label}</span>
							<div
								className={`absolute left-0 -bottom-[3px] h-[2px] bg-[#0F88D9] transition-all duration-300 ${activeTab === key ? "w-full" : "w-0 group-hover:w-full"
									}`}
							></div>
						</li>
					))}
				</ul>

        {/* Content */}
        <MentorsSettingsComps mentorship={{ [activeTab]: true }} dashboard={dashboard} />
      </section>
    </MentorLayout>
  );
}

export default MentorSettings;
