import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import {
	PolicyText,
	PolicyTime,
	PolicyTitle,
	PolicyHeadTitle,
} from "../styled/policystyled";
import { formatDateWithOf } from "../utilities/util";
import { termsData } from "../utilities/pageData.util";

export default function TermsUse() {
	useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth', // Optional: Smooth scrolling effect
        });
    }, [])
	return (
		<div className="justify-center overflow-hidden m-auto w-[100%]">
			<Header />
			<div className="m-auto w-[73%] mt-[7rem] mb-[3rem] p-1">
				<div className="bg-[#F6FAFDC9] w-full sm:w-[35%] md:w-[55%] p-4">
					{/* <div className='bg-[#F6FAFDC9]'> */}
					<PolicyTitle>{"Terms of Use"}</PolicyTitle>
					<PolicyTime className="pt-[.5rem]">{`Updated on ${formatDateWithOf(
						new Date("2023-01-30:13:44:00")
					)}`}</PolicyTime>
				</div>
				<div className="mt-[4rem]">
					{/* Step 1 */}
					<PolicyText>{termsData.termsintro}</PolicyText>
					{/* Step 2 */}
					<>
						<PolicyHeadTitle className="mt-[2.6rem]">
							{termsData.acceptterms}
						</PolicyHeadTitle>
						<PolicyText>{termsData.accepttermstext}</PolicyText>
						<PolicyHeadTitle className="mt-[2.6rem]">
							{termsData.privacy}
						</PolicyHeadTitle>
						<PolicyText>{termsData.privacytext}</PolicyText>
						<PolicyHeadTitle className="mt-[2.6rem]">
							{termsData.account}
						</PolicyHeadTitle>
						<PolicyText>{termsData.accounttext}</PolicyText>
					</>
					{/* Step 3 */}
					<>
						<PolicyHeadTitle className="mt-[2.6rem]">
							{termsData.obligation}
						</PolicyHeadTitle>
						<PolicyText>{termsData.obligationtext}</PolicyText>
						{termsData.obligationarray?.map((obligation, index) => (
							<PolicyText key={index}>{obligation}</PolicyText>
						))}
						<PolicyHeadTitle className="mt-[2.6rem]">
							{termsData.mentor}
						</PolicyHeadTitle>
						{termsData.mentorarray?.map((mentor, index) => (
							<PolicyText key={index}>{mentor}</PolicyText>
						))}
						<PolicyHeadTitle className="mt-[2.6rem]">
							{termsData.intellectual}
						</PolicyHeadTitle>
						{termsData.intellectualarray?.map(
							(intellectual, index) => (
								<PolicyText key={index}>
									{intellectual}
								</PolicyText>
							)
						)}
						<PolicyHeadTitle className="mt-[2.6rem]">
							{termsData.limitation}
						</PolicyHeadTitle>
						{termsData.limitationarray?.map((limitation, index) => (
							<PolicyText key={index}>{limitation}</PolicyText>
						))}
					</>
					{/* Step 4 */}
					<>
						<PolicyHeadTitle>
							{termsData.indentification}
						</PolicyHeadTitle>
						<PolicyText>{termsData.indentificationtext}</PolicyText>
						<PolicyHeadTitle>
							{termsData.modification}
						</PolicyHeadTitle>
						{termsData.modificationarray?.map(
							(modification, index) => (
								<PolicyText key={index}>
									{modification}
								</PolicyText>
							)
						)}
						<PolicyHeadTitle>
							{termsData.thirdparty}
						</PolicyHeadTitle>
						<PolicyText>{termsData.thirdpartytext}</PolicyText>
					</>
					{/* Step 5 */}
					<>
						<PolicyHeadTitle>{termsData.governing}</PolicyHeadTitle>
						<PolicyText>{termsData.governingtext}</PolicyText>
						<PolicyHeadTitle>
							{termsData.severability}
						</PolicyHeadTitle>
						<PolicyText>{termsData.severabilitytext}</PolicyText>
						<PolicyHeadTitle>{termsData.entire}</PolicyHeadTitle>
						<PolicyText>{termsData.entiretext}</PolicyText>
						<PolicyHeadTitle>{termsData.contact}</PolicyHeadTitle>
						<PolicyText>
							{termsData.contacttext}
							<a
								href="mailto:mentormeintech.com@gmail.com"
								className="cursor-pointer text-secondary-500"
							>
								{" "}
								mentormeintech
							</a>
						</PolicyText>
						<PolicyText className="mt-[3rem]">
							{termsData.using}
						</PolicyText>
					</>
				</div>
			</div>
			<Footer />
		</div>
	);
}
