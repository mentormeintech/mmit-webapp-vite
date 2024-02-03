import SignupHeader from "../../components/signupheader";
import SignupForm from "../../components/signupform";
import Footer from "../../components/footer"


const MenteeSignup = () => {
    return (
        <>
            <div className="w-full flex flex-col">
                <SignupHeader />
                <div data-aos="fade-right" className="mt-[5rem] w-11/12 flex flex-row self-center justify-center">
                    <div className="ml-[5.5rem]"> 
                        <div className="relative flex flex-col justify-between">
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
