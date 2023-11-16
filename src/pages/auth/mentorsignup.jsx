import SignupHeader from "../../components/signupHeader";
import SignupForm from "../../components/signupForm";
import Footer from "../../Components/footer"
import { useSelector } from "react-redux";

const MenteeSignup = () => {
    return (
        <>
            <div>
                <SignupHeader />
                <div className="flex flex-row items-center justify-evenly">
                    <div>
                        <div className="relative -top-40 flex flex-col justify-between">
                            <h1 className="w-[33rem] text-4xl font-semibold text-black">
                                {'Mentor'} <span className="text-orange-400">&</span> Experienced
                                Professionals
                            </h1>
                            <img
                                className="mt-8 w-1/2"
                                src="/images/login.png"
                                width={1000}
                                height={50}
                                alt="Login"
                            />
                        </div>
                    </div>
                    <SignupForm user_type="mentor" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MenteeSignup;
