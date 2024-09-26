import React, {useEffect} from "react";
import Header from "./../components/Header";
import Footer from "../components/footer";
import {
	PolicyHead,
	PolicyText,
	PolicyTime,
	PolicyTitle,
	PolicyHeadTitle,
} from "../styled/policystyled";
import { formatDateWithOf } from "../utilities/util";
import { policyData } from "../utilities/pageData.util";

export default function Privacypolicy() {
    useEffect(() => {
        const scrollHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
    
        const animateScroll = () => {
          const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
          const remainingScroll = scrollHeight - viewportHeight - currentPosition;
    
          if (remainingScroll > 0) {
            window.scrollBy(0, 1);
            requestAnimationFrame(animateScroll);
          }
        };
    
        // animateScroll();
    
        // return () => {
        //   cancelAnimationFrame(animateScroll);
        // };
      }, []);
	return (
		<div className="justify-center overflow-hidden m-auto w-[100%]">
			<Header />
			<div>
				<div className=" m-auto w-[73%] mt-[7rem] mb-[3rem] p-1">
					<div className="bg-[#F6FAFDC9] w-full sm:w-[35%] md:w-[55%] p-4">
						{/* <div className='bg-[#F6FAFDC9]'> */}
						<PolicyTitle>{"Privacy Policy"}</PolicyTitle>
						<PolicyTime className="pt-[.5rem]">{`Updated on ${formatDateWithOf(
							new Date("2023-01-30:13:44:00")
						)}`}</PolicyTime>
					</div>
					<div className="mt-[2rem]">
						{/* Step 1 */}
						<PolicyText>{policyData.policyintro}</PolicyText>
						{/* Step 2 */}
						<>
							<PolicyHead>{policyData.infohead}</PolicyHead>
							<PolicyHeadTitle>
								{policyData.infoheadtitle}
							</PolicyHeadTitle>
							<PolicyText>
								{policyData.infoheadtitletext}
							</PolicyText>
							<PolicyHeadTitle>
								{policyData.infoheadtitle2}
							</PolicyHeadTitle>
							<PolicyText>
								{policyData.infoheadtitletext2}
							</PolicyText>
						</>
						{/* Step 3 */}
						<>
							<PolicyHeadTitle>
								{policyData.useinfo}
							</PolicyHeadTitle>
							<PolicyHeadTitle>
								{policyData.providing}
							</PolicyHeadTitle>
							<PolicyText>{policyData.providingtext}</PolicyText>
							<PolicyHeadTitle>
								{policyData.communication}
							</PolicyHeadTitle>
							<PolicyText>
								{policyData.communicationText}
							</PolicyText>
							<PolicyHeadTitle>
								{policyData.analytics}
							</PolicyHeadTitle>
							<PolicyText>{policyData.analyticstext}</PolicyText>
						</>
						{/* Step 4 */}
						<>
							<PolicyHeadTitle>
								{policyData.datasecurity}
							</PolicyHeadTitle>
							<PolicyText>
								{policyData.datasecuritytext}
							</PolicyText>
							<PolicyHeadTitle>
								{policyData.sharinginfo}
							</PolicyHeadTitle>
							<PolicyText>
								{policyData.sharinginfotext}
							</PolicyText>
							<PolicyText>
								{policyData.sharinginfotext1}
							</PolicyText>
						</>
						{/* Step 5 */}
						<>
							<PolicyHeadTitle>
								{policyData.thirdparty}
							</PolicyHeadTitle>
							<PolicyText>{policyData.thirdpartytext}</PolicyText>
							<PolicyHeadTitle>
								{policyData.children}
							</PolicyHeadTitle>
							<PolicyText>{policyData.childrentext}</PolicyText>
							<PolicyHeadTitle>
								{policyData.changestopolicy}
							</PolicyHeadTitle>
							<PolicyText>
								{policyData.changestopolicytext}
							</PolicyText>
						</>
						{/* Step 6 */}
						<>
							<PolicyHeadTitle>
								{policyData.contact}
							</PolicyHeadTitle>
							<PolicyText>
								{policyData.contacttext}
								<a
									href="mailto:mentormeintech.com@gmail.com"
									className="cursor-pointer text-secondary-500"
								>
									{" "}
									mentormeintech
								</a>.
							</PolicyText>
							<PolicyText className="mt-[3rem]">
								{policyData.agree}
							</PolicyText>
						</>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
